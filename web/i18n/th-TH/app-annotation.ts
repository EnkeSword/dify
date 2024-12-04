const translation = {
  title: 'คำ อธิบาย',
  name: 'คําอธิบายประกอบ ตอบกลับ',
  editBy: 'ตอบแก้ไขโดย {{author}}',
  noData: {
    title: 'ไม่มีคําอธิบายประกอบ',
    description: 'คุณสามารถแก้ไขคําอธิบายประกอบระหว่างการดีบักแอปหรือนําเข้าคําอธิบายประกอบจํานวนมากได้ที่นี่เพื่อการตอบกลับคุณภาพสูง',
  },
  table: {
    header: {
      question: 'ปัญหา',
      answer: 'ตอบ',
      createdAt: 'สร้างเมื่อ',
      hits: 'ฮิต',
      actions: 'การกระทํา',
      addAnnotation: 'เพิ่มคําอธิบายประกอบ',
      bulkImport: 'นําเข้าจํานวนมาก',
      bulkExport: 'ส่งออกจํานวนมาก',
      clearAll: 'ล้างคําอธิบายประกอบทั้งหมด',
    },
  },
  editModal: {
    title: 'แก้ไขคําอธิบายประกอบ ตอบกลับ',
    queryName: 'การสอบถามของผู้ใช้',
    answerName: 'บอทนักเล่าเรื่อง',
    yourAnswer: 'คําตอบของคุณ',
    answerPlaceholder: 'พิมพ์คําตอบของคุณที่นี่',
    yourQuery: 'คําถามของคุณ',
    queryPlaceholder: 'พิมพ์แบบสอบถามของคุณที่นี่',
    removeThisCache: 'ลบคําอธิบายประกอบนี้',
    createdAt: 'สร้างที่',
  },
  addModal: {
    title: 'เพิ่มคําอธิบายประกอบตอบกลับ',
    queryName: 'ปัญหา',
    answerName: 'ตอบ',
    answerPlaceholder: 'พิมพ์คําตอบที่นี่',
    queryPlaceholder: 'พิมพ์ query ที่นี่',
    createNext: 'เพิ่มการตอบกลับที่มีคําอธิบายประกอบอื่น',
  },
  batchModal: {
    title: 'นําเข้าจํานวนมาก',
    csvUploadTitle: 'ลากและวางไฟล์ CSV ของคุณที่นี่ หรือ',
    browse: 'เล็ม',
    tip: 'ไฟล์ CSV ต้องสอดคล้องกับโครงสร้างต่อไปนี้:',
    question: 'ปัญหา',
    answer: 'ตอบ',
    contentTitle: 'เนื้อหาก้อน',
    content: 'เนื้อหา',
    template: 'ดาวน์โหลดเทมเพลตที่นี่',
    cancel: 'ยกเลิก',
    run: 'เรียกใช้แบทช์',
    runError: 'เรียกใช้ชุดงานล้มเหลว',
    processing: 'ในการประมวลผลแบบแบทช์',
    completed: 'นําเข้าเสร็จสมบูรณ์',
    error: 'ข้อผิดพลาดในการนําเข้า',
    ok: 'ตกลง, ได้',
  },
  errorMessage: {
    answerRequired: 'ต้องตอบ',
    queryRequired: 'จําเป็นต้องมีคําถาม',
  },
  viewModal: {
    annotatedResponse: 'คําอธิบายประกอบ ตอบกลับ',
    hitHistory: 'ประวัติการตี',
    hit: 'ตี',
    hits: 'ฮิต',
    noHitHistory: 'ไม่มีประวัติการตี',
  },
  hitHistoryTable: {
    query: 'สอบถาม',
    match: 'ไม้ขีดไฟ',
    response: 'การตอบสนอง',
    source: 'ที่มา',
    score: 'คะแนน',
    time: 'เวลา',
  },
  initSetup: {
    title: 'คําอธิบายประกอบตอบกลับการตั้งค่าเริ่มต้น',
    configTitle: 'การตั้งค่าการตอบกลับคําอธิบายประกอบ',
    confirmBtn: 'บันทึกและเปิดใช้งาน',
    configConfirmBtn: 'ประหยัด',
  },
  embeddingModelSwitchTip: 'โมเดลเวกเตอร์ข้อความคําอธิบายประกอบ โมเดลการสลับจะถูกฝังใหม่ส่งผลให้มีค่าใช้จ่ายเพิ่มเติม',
}

export default translation
