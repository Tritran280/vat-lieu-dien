const questionsData = {
    "question1": {
        "id": 1,
        "question": "Đèn Led phát sáng là do:",
        "options": [
            "Nguyên lý cảm ứng điện tử",
            "Hiện tượng phát sáng của chất bán dẫn",
            "Điện tử chuyển từ lớp có năng lượng cao sang lớp có năng lượng thấp hơn",
            "Sự phát sáng từ vật có nhiệt độ cao"
        ],
        "trueOption": 2
    },
    "question2": {
        "id": 2,
        "question": "Năng lượng ion hóa là năng lượng cần thiết để ….",
        "options": [
            "Kích thích nguyên tử",
            "Kết hợp 2 nguyên tử",
            "Phá vỡ nguyên tử",
            "Tách rời điện tử khỏi nguyên tử"
        ],
        "trueOption": 3
    },
    "question3": {
        "id": 3,
        "question": "Tính dẽo của polymer là do…",
        "options": [
            "Liên kết ion",
            "Liên kết kim loại",
            "Liên kết Van der Waals",
            "Liên kết cộng hóa trị"
        ],
        "trueOption": 2
    },
    "question4": {
        "id": 4,
        "question": "Bán kính quĩ đạo chuyển động của điện tử được xác định ….",
        "options": [
            "Từ số lớp vỏ điện tử",
            "Từ bán kính của hạt nhân",
            "Từ sự cân bằng giữa lực hút từ hạt nhân và lực ly tâm",
            "Từ sự cân bằng giữa lực mạnh và lực đẩy tĩnh điện"
        ],
        "trueOption": 2
    },
    "question5": {
        "id": 5,
        "question": "Liên kết giữa hai mạch phân tử trong polymer là …",
        "options": [
            "Liên kết Van der waal",
            "Liên kết cộng hóa trị",
            "Liên kết ion",
            "Liên kết kim loại"
        ],
        "trueOption": 0
    },
    "question6": {
        "id": 6,
        "question": "Chất  dẫn điện là chất …",
        "options": [
            "Có vùng hóa trị chồng lấp lên vùng dẫn",
            "Có vùng cấm nhỏ",
            "Có điện trở suất lớn",
            "Có vùng cấm lớn"
        ],
        "trueOption": 0
    },
    "question7": {
        "id": 7,
        "question": "Năng lượng của hệ thống liên kết được tạo nên từ 2 nguyên tử…. tổng năng lượng của hai nguyên tử riêng rẽ.",
        "options": [
            "Lớn gấp 2 lần",
            "Lớn hơn",
            "Bằng",
            "Nhỏ hơn"
        ],
        "trueOption": 3
    },
    "question8": {
        "id": 8,
        "question": "Mô hình nguyên tử chính xác nhất đến thời điểm hiện tại là...*",
        "options": [
            "Mô hình lượng tử",
            "Mô hình hành tinh",
            "Mô hình nguyên tử Bohr",
            "Mô hình Bohr cải tiến"
        ],
        "trueOption": 0
    },
    "question9": {
        "id": 9,
        "question": "Điện tử hóa trị …. trong tương tác giữa các nguyên tử cũng như phản ứng hóa học.",
        "options": [
            "Không tham gia",
            "Đóng vai trò quan trọng",
            "Có năng lượng cao nhất",
            "Tập trung ở lớp vỏ ngoài cùng"
        ],
        "trueOption": 1
    },
    "question10": {
        "id": 10,
        "question": "Theo lý thuyết phân vùng năng lượng, chất cách điện là chất ....",
        "options": [
            "Không có vùng cấm",
            "Dẫn điện ở nhiệt độ rất thấp",
            "Vùng cấm và vùng dẫn chống lấn lên nhau",
            "Có vùng cấm lớn"
        ],
        "trueOption": 3
    },
    "question11": {
        "id": 11,
        "question": "NaCl dễ hòa tan vào nước là do:",
        "options": [
            "Nước là chất có cực tính được tạo nên từ liên kết cộng hóa trị",
            "Tất cả đều đúng",
            "Tất cả đều sai",
            "NaCl là chất được tạo nên từ liên kết ion"
        ],
        "trueOption": 1
    },
    "question12": {
        "id": 12,
        "question": "Kim loại có tính dẽo và dẫn điện tốt là do:",
        "options": [
            "Tồn tại liên kết Van der Waals",
            "Tồn tại điện tử tự do",
            "Có nhiều điện tử ở lớp ngoài cùng",
            "Tất cả đều sai"
        ],
        "trueOption": 1
    },
    "question13": {
        "id": 13,
        "question": "Vật liệu điện có thể phân loại dựa vào:",
        "options": [
            "Giá thành của vật liệu",
            "Tất cả đều đúng",
            "Khả năng cách nhiệt",
            "Điện trở suất của vật liệu"
        ],
        "trueOption": 3
    },
    "question14": {
        "id": 14,
        "question": "Liên kết giữa C và H trong phân tử CH4 là liên kết:",
        "options": [
            "Liên kết kim loại",
            "Liên kết Van der Waals",
            "Cộng hoá trị",
            "Liên kết ion"
        ],
        "trueOption": 2
    },
    "question15": {
        "id": 15,
        "question": "Than chì dẫn điện là do:",
        "options": [
            "Liên kết cộng hóa trị giữa các nguyên tử C",
            "Liên kết ion giữa các nguyên tử C",
            "Một số điện tử có thể dịch chuyển giữa các lớp mạng tinh thể",
            "Liên kết yếu giữa các nguyên tử C"
        ],
        "trueOption": 2
    },
    "question16": {
        "id": 16,
        "question": "Dựa vào độ từ tính, vật liệu được chia thành...",
        "options": [
            "Từ tính và không có từ tính",
            "Vật liệu thuận từ, nghịch từ và sắt từ",
            "Bị oxy hóa và không bị oxy hóa",
            "Dẫn điện và cách điện"
        ],
        "trueOption": 1
    },
    "question17": {
        "id": 17,
        "question": "Mật độ dòng điện chạy trong kim loại phụ thuộc vào…",
        "options": [
            "Tất cả đều đúng",
            "Cường độ điện trường",
            "Mật độ điện tử tự do",
            "Phụ thuộc vào độ linh động điện tích của điện tử"
        ],
        "trueOption": 0
    },
    "question18": {
        "id": 18,
        "question": "Hợp kim của đồng bao gồm:",
        "options": [
            "Đồng và đồng thau",
            "Các hợp kim khác",
            "Đồng thau, đồng thanh và đồng đen",
            "Đồng thau và đồng thanh"
        ],
        "trueOption": 3
    },
    "question19": {
        "id": 19,
        "question": "Điện trở suất đặc trưng cho....",
        "options": [
            "Độ cản trở dòng điện của khối vật liệu",
            "Tất cả đều sai",
            "Độ cản trở dòng điện của vật liệu",
            "Dòng rò của vật liệu"
        ],
        "trueOption": 2
    },
    "question20": {
        "id": 20,
        "question": "Điện trở suất của kim loại ……",
        "options": [
            "Tăng khi nhiệt độ tăng",
            "Tăng khi mật độ dòng điện giảm",
            "Tăng khi điện áp tăng",
            "Tăng khi tiết diện vật dẫn tăng"
        ],
        "trueOption": 0
    },
    "question21": {
        "id": 21,
        "question": "Điện trở Shunt dùng để....",
        "options": [
            "Đo dòng DC",
            "Đo điện áp",
            "Đo công suất",
            "Đo dòng AC"
        ],
        "trueOption": 0
    },
    "question22": {
        "id": 22,
        "question": "Vật liệu sẽ bị phá hủy khi....",
        "options": [
            "Ứng suất gấp đôi độ bền",
            "Ứng suất tăng đến độ bền",
            "Một giá trị khác",
            "Ứng suất nhỏ hơn độ bền"
        ],
        "trueOption": 1
    },
    "question23": {
        "id": 23,
        "question": "Độ dẫn nhiệt của kim loại là do …..",
        "options": [
            "Tất cả đều đúng",
            "Sự va chạm giữa ion dương tại nút mạng tinh thể và điện tử tự do",
            "Chuyển động của các điện tử tự do",
            "Dao động của các ion dương tại nút mạng tinh thể"
        ],
        "trueOption":0
    },
    "question24": {
        "id": 24,
        "question": "Cặp nhiệt ngẫu bao gồm:",
        "options": [
            "Hai kim loại khác nhau",
            "Một kim loại và một phi kim",
            "Hai kim loại giống nhau",
            "Hai phi kim"
        ],
        "trueOption":0
    },
    "question25": {
        "id": 25,
        "question": "Than kỹ thuật điện được sử dụng làm....",
        "options": [
            "Điện cực trong lò luyện kim hồ quang",
            "Chổi than của máy điện",
            "Điện cực trong pin",
            "Tất cả đều đúng"
        ],
        "trueOption": 3
    },
    "question26": {
        "id": 26,
        "question": "Điện tử tự do trong kim loại ....",
        "options": [
            "Chuyển động chậm dần đều giữa hai lần va chạm",
            "Chuyển động nhanh dần đều giữa hai lần va chạm",
            "Chuyển động với vận tốc không đổi",
            "Tất cả đều sai"
        ],
        "trueOption": 2
    },
    "question27": {
        "id": 27,
        "question": "Hợp kim của đồng được sử dụng khi....",
        "options": [
            "Cần độ bền cơ cao hơn đồng nguyên chất",
            "Cần độ dẽo cao hơn đồng nguyên chất",
            "Cần tiết kiệm chi phí",
            "Cần giảm khối lượng"
        ],
        "trueOption": 0
    },
    "question28": {
        "id": 28,
        "question": "Bản chất của sự dẫn điện trong chất điện phân là do ……",
        "options": [
            "Sự chuyển động của điện tử tự do",
            "Sự đối lưu",
            "Sự chuyển động của tạp chất",
            "Sự chuyển động của các ion"
        ],
        "trueOption": 3
    },
    "question29": {
        "id": 29,
        "question": "Kim loại có độ dẫn điện tốt nhất là:",
        "options": [
            "Nhôm",
            "Đồng",
            "Bạc",
            "Vàng"
        ],
        "trueOption": 2
    },
    "question30": {
        "id": 30,
        "question": "Khối kim loại được gia công bằng phương pháp cán/kéo nóng sẽ có...",
        "options": [
            "Độ giãn dài nhỏ",
            "Tất cả đều sai",
            "Tính dẽo cao",
            "Độ bền cơ cao"
        ],
        "trueOption": 2
    },
    "question31": {
        "id": 31,
        "question": "Nhôm được sử dụng thay đồng làm dây dẫn điện trên không là do....",
        "options": [
            "Nhôm dễ hàn nối hơn đồng",
            "Nhôm có khả năng chống oxy hóa tốt hơn đồng",
            "Nhôm nhẹ và rẻ hơn đồng",
            "Nhôm cứng hơn đồng"
        ],
        "trueOption": 2
    },
    "question32": {
        "id": 32,
        "question": "Khối kim loại được gia công bằng phương pháp cán/kéo nguội sẽ có...",
        "options": [
            "Độ giãn dài lớn",
            "Độ bền cơ cao",
            "Tính dẽo cao",
            "Tất cả đều sai"
        ],
        "trueOption": 1
    },
    "question33": {
        "id": 33,
        "question": "Kim loại dẫn điện tốt là do....",
        "options": [
            "Sự dịch chuyển của ion âm",
            "Sự dịch chuyển của ion dương",
            "Tồn tại điện tích liên kết",
            "Tồn tại điện tử tự do"
        ],
        "trueOption": 3
    },
    "question34": {
        "id": 34,
        "question": "Ứng suất cơ học xuất hiện trong vật liệu khi...",
        "options": [
            "Có tác động của lực cơ học",
            "Gia nhiệt",
            "Làm mát",
            "Phá vỡ khối vật liệu"
        ],
        "trueOption": 0
    },
    "question35": {
        "id": 35,
        "question": "Tỉ số giữa độ dẫn nhiệt và độ dẫn điện tại một giá trị nhiệt độ ….",
        "options": [
            "Phụ thuộc điện áp",
            "Không phụ thuộc nhiệt độ",
            "Xấp xỉ bằng nhau đối với một số kim loại thông thường",
            "Khác nhau đối với các kim loại khác nhau"
        ],
        "trueOption": 2
    },
    "question36": {
        "id": 36,
        "question": "Điện tử tự do trong kim loại ....",
        "options": [
            "Chậm dần đều",
            "Chịu tác động của chuyển động nhiệt và điện trường ngoài",
            "Vận tốc không đổi",
            "Liên kết chặt chẽ với hạt nhân của nguyên tử của kim loại"
        ],
        "trueOption": 1
    },
    "question37": {
        "id": 37,
        "question": "Điên tử tự do dịch chuyển trong mạng tinh thể kim loại dưới dạng....",
        "options": [
            "Dích dắc",
            "Chậm dần đều",
            "Tất cả đều sai",
            "Quỹ đạo thẳng"
        ],
        "trueOption": 0
    },
    "question38": {
        "id": 38,
        "question": "Tổn hao điện môi bị ảnh hưởng bởi:",
        "options": [
            "Tần số của nguồn điện",
            "Tất cả đều đúng",
            "Nồng độ tạp chất",
            "Điện áp tác dụng"
        ],
        "trueOption": 1
    },
    "question39": {
        "id": 39,
        "question": "Sự tồn tại điện tích bên trong tụ điện sau khi nạp là do hiện tượng....",
        "options": [
            "Cấp nguồn",
            "Phân cực",
            "Ion hóa",
            "Dẫn điện"
        ],
        "trueOption": 1
    },
    "question40": {
        "id": 40,
        "question": "Phân cực điện tử ….",
        "options": [
            "Không làm xuất hiện điện tích ở bề mặt điện môi",
            "Gây ra tổn hao điện môi",
            "Phát sinh nhiệt lớn",
            "Có thời gian phân cực ngắn"
        ],
        "trueOption": 3
    },
    "question41": {
        "id": 41,
        "question": "Tổn hao điện môi do điện áp xoay chiều gây ra..... tổn hao điện môi do điện áp một chiều gây ra.",
        "options": [
            "Bằng với",
            "Lớn hơn",
            "Không thể so sánh được",
            "Nhỏ hơn"
        ],
        "trueOption": 1
    },
    "question42": {
        "id": 42,
        "question": "Tan delta của khối điện môi/cách điện có thể được đo bằng...",
        "options": [
            "Volt kế",
            "VOM",
            "Cầu đo Schering",
            "Ampere kế"
        ],
        "trueOption": 2
    },
    "question43": {
        "id": 43,
        "question": "Cường độ điện trường do phân cực tạo nên sẽ…*",
        "options": [
            "Bằng với cường độ điện trường ngoài",
            "Nhỏ hơn cường độ điện trường ngoài",
            "Lớn hơn cường độ điện trường ngoài",
            "Cùng chiều với điện trường ngoài"
        ],
        "trueOption": 1
    },
    "question44": {
        "id": 44,
        "question": "Sư phân cực là....dưới tác động của điện trường",
        "options": [
            "Sự định hướng của các lưỡng cực điện",
            "Phóng điện đánh thủng",
            "Tất cả đều đúng",
            "Dẫn điện"
        ],
        "trueOption": 0
    },
    "question45": {
        "id": 45,
        "question": "Tổn hao điện môi được biểu diễn bằng.....",
        "options": [
            "Một trong hai sơ đồ như trên",
            "Một tụ điện C nối song song điện trở R",
            "Tất cả đều sai",
            "Một tụ điện C nối nối tiếp điện trở R"
        ],
        "trueOption": 0
    },
    "question46": {
        "id": 46,
        "question": "Điện dẫn …chiếm ưu thế trong chất cách điện lỏng chứa tạp chất ở điện trường thấp",
        "options": [
            "Điện tử và Ion",
            "Điện di và điện tử",
            "Ion và điện di",
            "Tất cả đều sai"
        ],
        "trueOption": 2
    },
    "question47": {
        "id": 47,
        "question": "Phân cực lưỡng cực ….",
        "options": [
            "Không làm xuất hiện điện tích ở bề mặt điện môi",
            "Có thời gian phân cực ngắn",
            "Gây ra tổn hao điện môi",
            "Không gây ra tổn hao điện môi"
        ],
        "trueOption": 2
    },
    "question48": {
        "id": 48,
        "question": "Nếu giữ điện áp đặt lên hai bản cực không đổi, điện tích trên bề mặt bản cực sẽ… khi điện môi rắn được đặt vào hai bản cực.",
        "options": [
            "Tăng",
            "Di chuyển vào điện môi rắn",
            "Giảm",
            "Không đổi"
        ],
        "trueOption": 0
    },
    "question49": {
        "id": 49,
        "question": "Hằng số điện môi cho biết:",
        "options": [
            "Mức độ tổn hao của vật liệu",
            "Mức độ phản ứng hay phân cực của vật liệu",
            "Mức độ điện tích di chuyển từ bản cực vào vật liệu",
            "Mức độ tạp chất"
        ],
        "trueOption": 1
    },
    "question50": {
        "id": 50,
        "question": "Khi đặt điện môi rắn vào trong điện trường thấp, điện môi sẽ bị…",
        "options": [
            "Kích thích",
            "Phóng điện",
            "Phân cực",
            "Ion hóa"
        ],
        "trueOption": 2
    },
    "question51": {
        "id": 51,
        "question": "Khi tần số nguồn càng tăng thì hằng số điện môi của vật liệu cách điện....",
        "options": [
            "Càng giảm",
            "Thay đổi không đáng kể",
            "Càng tăng",
            "Không đổi"
        ],
        "trueOption": 0
    },
    "question52": {
        "id": 52,
        "question": "Điện dẫn …chiếm ưu thế trong chất cách điện rắn ở điện trường thấp.",
        "options": [
            "Ion",
            "Điện di",
            "Tất cả đều sai",
            "Điện tử"
        ],
        "trueOption": 0
    },
    "question53": {
        "id": 53,
        "question": "Điện dẫn …. chiếm ưu thế trong chất khí ở điện trường thấp.",
        "options": [
            "Điện di",
            "Điện tử",
            "Tất cả đều sai",
            "Ion"
        ],
        "trueOption": 1
    },
    "question54": {
        "id": 54,
        "question": "Ưu điểm của chất cách điện rắn là...",
        "options": [
            "Độ bền cơ cao",
            "Có thể làm vật liệu kết cấu",
            "Tất cả đều đúng",
            "Độ bền điện cao"
        ],
        "trueOption": 2
    },
    "question55": {
        "id": 55,
        "question": "SF6 là .....nên bị hạn chế sử dụng.",
        "options": [
            "Khí độc",
            "Khí dễ phân hủy",
            "Khí nhà kính",
            "Khí thân thiện môi trường"
        ],
        "trueOption": 2
    },
    "question56": {
        "id": 56,
        "question": "XLPE được xem như là....",
        "options": [
            "Nhựa nhiệt dẻo",
            "Composite",
            "Nhựa đàn hồi nhiệt dẻo",
            "Nhựa nhiệt rắn"
        ],
        "trueOption": 1
    },
    "question57": {
        "id": 57,
        "question": "Chức năng của vật liệu cách điện là....",
        "options": [
            "Tất cả đều đúng",
            "Nâng đỡ và định vị các bộ phận mang điện",
            "Ngăn cản dòng điện rò",
            "Ngăn chặn sự phóng điện"
        ],
        "trueOption": 0
    },
    "question58": {
        "id": 58,
        "question": "Mica cách điện có các ưu điểm như...",
        "options": [
            "Chịu ẩm và kháng phóng điện cục bộ",
            "Độ bền điện cao",
            "Độ bền nhiệt cao",
            "Tất cả đều đúng"
        ],
        "trueOption": 3
    },
    "question59": {
        "id": 59,
        "question": "Dầu máy biến áp hiện tại có nguồn gốc chủ yếu từ....",
        "options": [
            "Dầu thô",
            "Dầu thực vật",
            "Tất cả đều sai",
            "Dầu sinh học"
        ],
        "trueOption": 0
    },
    "question60": {
        "id": 60,
        "question": "Nhược điểm của giấy cách điện là...",
        "options": [
            "Cấu trúc xốp",
            "Dễ hút ẩm",
            "Tất cả đều đúng",
            "Phải tẩm dầu"
        ],
        "trueOption": 2
    },
    "question61": {
        "id": 61,
        "question": "Nhược điểm của sứ gốm và sứ thủy tinh là...",
        "options": [
            "Tất cả đều đúng",
            "Không bám ô nhiễm",
            "Không nứt",
            "Nặng và dễ vỡ"
        ],
        "trueOption": 3
    },
    "question62": {
        "id": 62,
        "question": "Theo tiêu chuẩn IEC, vật liệu cách điện được phân chia theo....",
        "options": [
            "7 cấp độ chịu nhiệt",
            "7 cấp độ chịu lực",
            "Tất cả đều sai",
            "7 cấp độ chịu điện"
        ],
        "trueOption": 0
    },
    "question63": {
        "id": 63,
        "question": "Sứ gốm và sứ thủy tinh có ưu điểm là....",
        "options": [
            "Không nứt",
            "Không bị lão hóa",
            "Tất cả đều đúng",
            "Không bám ô nhiễm"
        ],
        "trueOption": 1
    },
    "question64": {
        "id": 64,
        "question": "Mica cách điện có thể được sử dụng tại...",
        "options": [
            "Cáp lực",
            "Máy biến áp",
            "Tất cả đều đúng",
            "Cuộn dây máy điện quay trung thế"
        ],
        "trueOption": 2
    },
    "question65": {
        "id": 65,
        "question": "Giấy cách điện là một loại vật liệu truyền thống và có các ưu điểm như sau: ",
        "options": [
            "Phân hủy sinh học",
            "Tất cả đều đúng",
            "Rẻ tiền, dễ dàng sản xuất với nhiều chiều dày khác nhau",
            "Tốc độ lão hóa thấp dưới tác động của nhiệt độ"
        ],
        "trueOption": 1
    },
    "question66": {
        "id": 66,
        "question": "Độ bền điện của chất cách điện khí....",
        "options": [
            "Tăng không giới hạn theo áp suất",
            "Sẽ bão hòa khi áp suất quá cao",
            "Không đổi theo áp suất",
            "Giảm theo áp suất"
        ],
        "trueOption": 1
    },
    "question67": {
        "id": 67,
        "question": "XLPE được sử dụng trong cáp trung và cao áp thay cho PE là do...",
        "options": [
            "Có độ bền nhiệt cao",
            "Có điện trở suất cao",
            "Có tổn hao điện môi thấp",
            "Có độ bền điện cao"
        ],
        "trueOption": 0
    },
    "question68": {
        "id": 68,
        "question": "Khí SF6 có các ưu điểm như....",
        "options": [
            "Độ bền điện cao",
            "Khả năng dập tắt hồ quang",
            "Tất cả đều đúng",
            "Trơ"
        ],
        "trueOption": 2
    },
    "question69": {
        "id": 69,
        "question": "Khí SF6 được sử dụng ....",
        "options": [
            "Để cách điện đường dây trên không",
            "Để cách điện trong máy phát trung thế",
            "Máy cắt trung và cao thế",
            "Trong máy cắt chân không"
        ],
        "trueOption": 2
    },
    "question70": {
        "id": 70,
        "question": "Cao su silicone được sử dụng làm lớp bọc bên ngoài của sứ composite là do...",
        "options": [
            "Silicone kỵ nước (không dính nước)",
            "Điện trở suất mặt cao",
            "Tất cả đều đúng",
            "Nhẹ hơn sứ gốm"
        ],
        "trueOption": 2
    },
    "question71": {
        "id": 71,
        "question": "Nhựa nhiệt rắn (epoxy)....",
        "options": [
            "Có thể bị hóa dẻo nhiều lần khi gia nhiệt",
            "Tự hóa rắn khi tiếp xúc không khí",
            "Không thể bị hóa dẻo bằng nhiệt sau khi đóng rắn",
            "Tất cả đều sai"
        ],
        "trueOption": 2
    },
    "question72": {
        "id": 72,
        "question": "Chất cách điện rắn có thể phân chia thành....",
        "options": [
            "Nhựa nhiệt dẻo, nhựa nhiệt rắn và composite",
            "Tất cả đều sai",
            "Vô cơ, hữu cơ và composite",
            "Vô cơ, hữu cơ và polymer tổng hợp"
        ],
        "trueOption": 2
    }
}