"""add_created_at_index_for_messages

Revision ID: 01d6889832f7
Revises: 09a8d1878d9b
Create Date: 2024-11-12 09:25:05.527827

"""
from alembic import op
import models as models
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '01d6889832f7'
down_revision = '09a8d1878d9b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('messages', schema=None) as batch_op:
        batch_op.create_index('message_created_at_idx', ['created_at'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('messages', schema=None) as batch_op:
        batch_op.drop_index('message_created_at_idx')
    # ### end Alembic commands ###
