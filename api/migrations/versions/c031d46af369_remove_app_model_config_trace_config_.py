"""remove app model config trace config and rename trace app config

Revision ID: c031d46af369
Revises: 04c602f5dc9b
Create Date: 2024-06-17 10:01:00.255189

"""
import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects import postgresql

import models.types

# revision identifiers, used by Alembic.
revision = 'c031d46af369'
down_revision = '04c602f5dc9b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('trace_app_config',
    sa.Column('id', models.types.StringUUID(), server_default=sa.text('uuid_generate_v4()'), nullable=False),
    sa.Column('app_id', models.types.StringUUID(), nullable=False),
    sa.Column('tracing_provider', sa.String(length=255), nullable=True),
    sa.Column('tracing_config', sa.JSON(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('updated_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.Column('is_active', sa.Boolean(), server_default=sa.text('true'), nullable=False),
                    sa.PrimaryKeyConstraint('id', name='trace_app_config_pkey')
    )
    with op.batch_alter_table('trace_app_config', schema=None) as batch_op:
        batch_op.create_index('trace_app_config_app_id_idx', ['app_id'], unique=False)

    with op.batch_alter_table('tracing_app_configs', schema=None) as batch_op:
        batch_op.drop_index('tracing_app_config_app_id_idx')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tracing_app_configs',
    sa.Column('id', sa.UUID(), server_default=sa.text('uuid_generate_v4()'), autoincrement=False, nullable=False),
    sa.Column('app_id', sa.UUID(), autoincrement=False, nullable=False),
    sa.Column('tracing_provider', sa.VARCHAR(length=255), autoincrement=False, nullable=True),
    sa.Column('tracing_config', postgresql.JSON(astext_type=sa.Text()), autoincrement=False, nullable=True),
    sa.Column('created_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'), autoincrement=False, nullable=False),
    sa.Column('updated_at', postgresql.TIMESTAMP(), server_default=sa.text('now()'), autoincrement=False, nullable=False),
                    sa.PrimaryKeyConstraint('id', name='trace_app_config_pkey')
    )
    with op.batch_alter_table('tracing_app_configs', schema=None) as batch_op:
        batch_op.create_index('trace_app_config_app_id_idx', ['app_id'], unique=False)

    with op.batch_alter_table('trace_app_config', schema=None) as batch_op:
        batch_op.drop_index('trace_app_config_app_id_idx')

    op.drop_table('trace_app_config')
    # ### end Alembic commands ###
