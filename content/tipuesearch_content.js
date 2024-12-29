var tipuesearch = {"pages": [{'title': 'About', 'text': '個人網站: https://mdecp2024.github.io/hw-BrianTsai071/content/index.html \n 個人倉儲:  https://github.com/mdecp2024/hw-BrianTsai071 \n 國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: \n 個人網站: \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '心得 \n', 'tags': '', 'url': 'HW 1.html'}, {'title': '基於瀏覽器的分散式版次管理與整合程式開發環境心得', 'text': '在這次課題中，我學習了如何利用瀏覽器建立分散式版次管理以及整合程式開發環境，並深入探索了相關技術，包括 GitHub、Python 與 Jupyter Notebook 的應用。此外，針對不同硬體與授權模式的效能比較，也幫助我更全面理解開發環境的最佳實踐。 \n \n 學習內容摘要 \n 1. GitHub 與 Codespaces 的概念 GitHub 是一個強大的分散式版次管理平台，可以輕鬆進行程式碼儲存、共享及協作。而 Codespaces 則提供了一個基於雲端的整合開發環境（IDE），無需本地化安裝繁重的軟體，即可快速啟動與管理程式碼開發，這對於分散式團隊協作非常有利。 \n 2. 靜態 HTTPS 授權的優勢 透過將 CMSIMDE 中的  wsgi.py  配置從動態授權（ ssl_context="adhoc" ）切換為靜態檔案授權（ ssl_context=(\'cert.pem\', \'key.pem\') ），效能有顯著提升。根據測試，執行時間可以縮短約 20%-50%，這在處理頻繁請求的開發環境中非常重要。此外，生成證書的方法（如使用 OpenSSL）也非常直觀。 \n 3. 儲存媒體的選擇與效能分析 \n \n 使用 USB 隨身碟儲存與執行作業倉儲，雖然便於攜帶，但因傳輸速率的限制，執行速度通常比固態硬碟（SSD）慢 3-10 倍。 \n 為提升效能，建議將頻繁使用的應用程式安裝於 C:\\ 固態硬碟，僅將必需的數據存放於 USB 中，這樣可以兼顧便攜性與效能。 \n \n \n 實作與體驗 \n 在實作過程中，我完成了以下幾個重要步驟： \n \n 使用學號申請 GitHub 免費帳號，並利用課程提供的教材（如 Learn Python with Jupyter）進一步熟悉程式開發與 Notebook 的應用。 \n 依據課堂指導，透過 OpenSSL 生成靜態授權的  cert.pem  與  key.pem ，並將其整合到 Flask 應用中以提升效能。 \n 比較 USB 隨身碟與 C:\\ 固態硬碟在執行作業倉儲時的速度差異，發現固態硬碟效能顯著更高，尤其在大型檔案的讀取與寫入方面。 \n \n \n 心得與反思 \n 透過本次學習，我深刻體會到選擇合適的開發環境與配置對於提高效率的重要性。靜態 HTTPS 授權的效能提升及 SSD 儲存的速度優勢，都是以小改進換取大提升的實例。此外，學習如何善用工具（如 GitHub 和 Jupyter Notebook），也讓我在日後的開發中能更加得心應手。 \n 最讓我印象深刻的是透過分散式版次管理進行多人協作的便利性。無論是在個人專案還是團隊開發中，GitHub 的 pull requests、issue tracking 等功能都能有效提升溝通與效率，讓程式開發的流程更加順暢。 \n 未來，我希望能更多地應用所學知識於實際專案中，特別是在效能優化與跨平台開發方面。我也計劃深入學習 Python 與 Flask，進一步掌握後端技術，為自己的專業技能增添更多價值。 \n 主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': '基於瀏覽器的分散式版次管理與整合程式開發環境心得.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'w7', 'text': '*我已經學會簡單的python程式了* \n \n \n \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w9', 'text': 'w9.triangle \n \n w9.triangle.2 \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'Brython.triangle1', 'text': '\n', 'tags': '', 'url': 'Brython.triangle1.html'}, {'title': 'Brython.triangle2', 'text': '\n jyputer1 \n /downloads/triangle1.ipynb \n jyputer2 \n /downloads/triangle2.ipynb \n \n', 'tags': '', 'url': 'Brython.triangle2.html'}, {'title': 'HW1 exam', 'text': '', 'tags': '', 'url': 'HW1 exam.html'}, {'title': 'w10_hw', 'text': '題目一 \n 題目一 : 請利用 程式一 的原始碼, 分別在自己網站的 Brython 頁面、SciTE 編輯器、命令提示字元視窗、Jupyter Lab 以及 Codespaces 環境中執行, 所完成的操作影片, 請以"國立虎尾科技大學機械設計工程系 - 計算機程式 - 題目一: 學號" 作為標題, 並在影片說明欄位中敘述此一影片的操作概要與心得, 完成後請將影片上傳至個人 Youtube 帳號中, 並嵌入個人網站中的 "w10" 頁面. \n \n 心得與做法: \n 利用codespace、brython、jupyter、cmd、scite執行程式，我覺得我有學習到每個編譯器的操作過程 \n 把前面學到的東西統整起來 有學習到程式相關的東西 \n 題目二 \n 題目二: 請問 Python 程式中有關變數的命名, 除了必須以"_", 以及英文大小寫字母開頭之外, 還有甚麼需要特別注意的地方? 與所謂的"關鍵字"( Keywords )有關係嗎? 請實際舉例, 針對 Python 程式命名的規則編寫程式, 並採上一題的五種程式執行方法, 展示正確變數命名與違反變數命名時, 所顯示的錯誤訊息回應. 影片命名及嵌入網頁要求與題目一相同, 但必須使用"題目二"標示. \n \n 心得與做法: \n scite、codespace、jupyter、brython、cmd 的正確與錯誤程式樣式 \n 了解到正確與錯誤的語法差異 \n 題目三 \n 題目三:\xa0 http://mde.tw/cp2024/content/Problem_set.html \xa0中有利用 Python 程式解決物理與微積分的範例流程, 請根據過程中所得到的 Python 程式, 利用題目一中的五種方法執行後, 在影片說明欄位及個人 w10 頁面中說明解題流程與心得, 影片命名及嵌入網頁要求與題目一相同, 但必須使用"題目三"標示. \n 心得與做法: \n 利用scite、cmd、codespace、jupyter、brython進行三個物理及一個微積分程式，讓我更熟悉每一個程式編譯器的操作模式，也讓我知道物理及數學問題可以使用程式解答 \n \n \n', 'tags': '', 'url': 'w10_hw.html'}, {'title': 'w11_hw', 'text': '已知可以用 Python 程式由上往下列印三角形 *, 或由左往右列印三角形 *, 請將此程式延伸到可以在 10x10 的字元區域中, 以 "*" 字元列印出圓型區域. 完成後請將程式碼存入個人 Gist 後, 直接在個人作業網站中的 Brython 頁面中執行. (提示: ?src=gist_script_URL)\xa0\xa0 \n 心得:有稍微看一下程式內容，嘗試去理解意思。  \n 解題過程:利用*由左而右即由上而下做三角形，我利用chatgpt 幫求出答案 \n \xa0已知可以在網頁中利用 Brython 繪製方格與塗色, 如下連結, 請設法修改此一程式, 直接將程式存入個人的 Gist, 並利用黑色方塊圍出一個圓形區域. \n 心得:有稍微看一下程式內容，嘗試去理解意思。 \n 解題過程:利用chatgpt 求解得出程式內容。 \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '\n \n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_hw', 'text': '\n \n \n \n w15.html \n', 'tags': '', 'url': 'w14_hw.html'}, {'title': 'w15_hw', 'text': '\n \n w15_anchor \n \n --------------------------------------------------------------------------------------------------------------- \n \n \n w15_addto \n --------------------------------------------------------------------------------------- \n w15_add_only_even \n \n \n \n \n -------------------------------------------------------------------------- \n \n w15_add_avoid_8 \n \n', 'tags': '', 'url': 'w15_hw.html'}, {'title': 'HW2 exam', 'text': '', 'tags': '', 'url': 'HW2 exam.html'}, {'title': 'w16_exam1', 'text': '\n \n 題目: 請以自己的學號最後四碼作為繪圖的座標原點, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖座標原點), 並以 pixel=2 的黑色直線分別利用 Brython 繪圖, 標示出向右為正的 X 軸, 以及向下為正的 Y 軸, 並且利用文字標示出原點座標 (例如: (39, 32)), 之後請自選最左側圖形的起始點座標, 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像 心得:問了chatgpt很多問題，才解出這個題目，但到了期末也比較知道怎麼問問題以及問題出在哪裡並除錯。 \n w16_exam_1.py \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w16_exam1.html'}, {'title': 'w16_exam2', 'text': '請以 自己的學號最後四碼 作為下列繪圖的左上方點座標, (例如: 若學號最後四碼為 3932, 請將 (39, 32) 作為繪圖左上方點座標), 並以紅色文字標示出該點座標 (例如: (39, 32)), 之後請利用\xa0 pixel=2 的藍色直線 ,\xa0 自訂迷宮畫布大小 , 直接在頁面畫出下列圖像, 繪圖程式除了必須直接列在頁面 html 檔案外, 也請存入自己的 Gist 區域, 並在所完成的圖像下方, 以自選標題的 anchor 連結至 Gist, 讓使用者點擊該連結後, 可以在各自的 Brython 頁面中繪出下列圖像). \n 心得:先用chatgpt大概了解一下程式結構，在一步一步改成與題目一樣的圖形。 \n \n exam2 \n \n', 'tags': '', 'url': 'w16_exam2.html'}, {'title': 'w16_exam3', 'text': '\n exam3 \n \n', 'tags': '', 'url': 'w16_exam3.html'}, {'title': 'Brython', 'text': '\n 從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中.', 'tags': '', 'url': 'Final Report.html'}]};