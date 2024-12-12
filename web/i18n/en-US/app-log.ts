const translation = {
  title: 'Logs',
  description: 'The logs record the running status of the application, including user inputs and AI replies.',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      updatedTime: 'Updated time',
      time: 'Created time',
      endUser: 'End User or Account',
      input: 'Input',
      output: 'Output',
      summary: 'Title',
      messageCount: 'Message Count',
      userRate: 'User Rate',
      adminRate: 'Op. Rate',
      startTime: 'START TIME',
      status: 'STATUS',
      runtime: 'RUN TIME',
      tokens: 'TOKENS',
      user: 'End User or Account',
      version: 'VERSION',
    },
    pagination: {
      previous: 'Prev',
      next: 'Next',
    },
    empty: {
      noChat: 'No conversation yet',
      noOutput: 'No output',
      element: {
        title: 'Is anyone there?',
        content: 'Observe and annotate interactions between end-users and AI applications here to continuously improve AI accuracy. You can try <shareLink>sharing</shareLink> or <testLink>testing</testLink> the Web App yourself, then return to this page.',
      },
    },
  },
  detail: {
    time: 'Time',
    conversationId: 'Conversation ID',
    promptTemplate: 'Prompt Template',
    promptTemplateBeforeChat: 'Prompt Template Before Chat · As System Message',
    annotationTip: 'Improvements Marked by {{user}}',
    timeConsuming: '',
    second: 's',
    tokenCost: 'Token spent',
    loading: 'loading',
    operation: {
      like: 'like',
      dislike: 'dislike',
      addAnnotation: 'Add Improvement',
      editAnnotation: 'Edit Improvement',
      annotationPlaceholder: 'Enter the expected answer that you want AI to reply, which can be used for model fine-tuning and continuous improvement of text generation quality in the future.',
    },
    variables: 'Variables',
    uploadImages: 'Uploaded Images',
    modelParams: 'Model parameters',
  },
  filter: {
    period: {
      today: 'Today',
      last7days: 'Last 7 Days',
      last4weeks: 'Last 4 weeks',
      last3months: 'Last 3 months',
      last12months: 'Last 12 months',
      monthToDate: 'Month to date',
      quarterToDate: 'Quarter to date',
      yearToDate: 'Year to date',
      allTime: 'All time',
    },
    annotation: {
      all: 'All',
      annotated: 'Annotated Improvements ({{count}} items)',
      not_annotated: 'Not Annotated',
    },
    sortBy: 'Sort by:',
    descending: 'descending',
    ascending: 'ascending',
  },
  workflowTitle: 'Workflow Logs',
  workflowSubtitle: 'The log recorded the operation of Automate.',
  runDetail: {
    title: 'Conversation Log',
    workflowTitle: 'Log Detail',
    fileListLabel: 'File Details',
    fileListDetail: 'Detail',
  },
  promptLog: 'Prompt Log',
  agentLog: 'Agent Log',
  viewLog: 'View Log',
  agentLogDetail: {
    agentMode: 'Agent Mode',
    toolUsed: 'Tool Used',
    iterations: 'Iterations',
    iteration: 'Iteration',
    finalProcessing: 'Final Processing',
  },
}

export default translation
