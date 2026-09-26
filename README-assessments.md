# Omni Tech — اختبارات تحديد المستوى على GitHub Pages

ارفع الملفات الموجودة داخل هذا المجلد إلى جذر مستودع GitHub، وفعّل GitHub Pages للفرع الرئيسي والمجلد `/`. الصفحة الرئيسية ترتبط بصفحة `assessment.html`. تعرض صفحة الاختبارات الشهادات الـ21 الأولى، والـ88 اسمًا الإضافية المطلوبة، وCompTIA A+ الموجودة سابقًا، وخمسة مسارات Cisco جديدة: 115 شهادة ومسارًا ظاهرًا. استخدم البحث للوصول إلى الشهادة. الامتحانات ذات بنك الأسئلة المكتمل فقط تتيح اختيارها ثم إدخال كودها الخاص؛ عرض اسم شهادة لا يعني وجود اختبار جاهز لها.

## قائمة Cisco الإضافية (43 امتحانًا وتقييمًا)

تظهر كل البنود الـ43 في مسارات Cisco، بما فيها الامتحانات المشتركة بين CCNP وCCIE. كانت معظم أرقام الامتحانات موجودة بالفعل؛ أُضيفت CCST IT Support 100-140 وCCNA Automation 200-901 وCCNP Automation (AUTOCOR 350-901 مع ENAUTO أو DCNAUTO) وCCIE Automation Practical وCCDE Written 400-007 مع CCDE Practical. تقييمات CCIE وCCDE العملية تتطلب بيئة عملية منفصلة. الإدراج في القائمة وحده لا ينشئ بنك أسئلة أو كودًا؛ الامتحانات القابلة للحل أصبحت 118. مرجع القائمة: https://www.cisco.com/site/us/en/learn/training-certifications/exams/list.html .

## الإضافات الجديدة

الأسماء الـ88 مضافة في `additional-tracks.js` بالترتيب المرسل، بما فيها Microsoft وAWS وGoogle وFortinet وHPE Juniper وPalo Alto Networks وCheck Point وISC2 وEC-Council وGIAC وOffSec وISACA وCSA وHuawei وMikroTik وCNCF وOracle. رُبطت البنوك الجاهزة مسبقًا بالمسارات المقابلة: AZ-900 وAZ-104 وSC-900 وFortinet NSE 4 FortiOS 7.6 وPalo Alto NGFW Engineer. ليس لهذه الإضافات الخمس بنك جديد؛ إنها نفس الامتحانات التي كانت متاحة أصلًا. الأسماء التي ما زالت بلا بنك مستقل لا تطلب كودًا. أُبرزت اختبارات OffSec وJNCIE وCKA/CKAD/CKS كعملية تحتاج مختبرًا منفصلًا. بعض أسماء Fortinet وPalo Alto هي مسارات واسعة وليست رمز امتحان واحد؛ يلزم تحديد الامتحان عند كتابة أسئلته. المواصفات والأسماء قد تتغير عند الجهات المانحة، فراجع دليل الجهة عند تجهيز كل بنك. لا ندعي أن الأسئلة المتاحة مكافئة لصعوبة الامتحان الرسمي.

## الوصول بكود خاص لكل امتحان

اضغط اسم الامتحان أولًا، ثم أدخل كوده. لكل امتحان كود مختلف داخل `assessment-config.js`، ويمكن أن يكون الكود رقمًا واحدًا أو أي عدد من الأرقام. الأكواد الحالية المكونة من 12 رقمًا تظل صالحة حتى تغيّرها. لتغيير كود امتحان، افتح `assessment-config.js` على GitHub وغيّر الرقم بين علامتي التنصيص بجانب ID الامتحان، مثل تغيير `'ccna': '164440913012'` إلى `'ccna': '5837'`. احتفظ بعلامتي التنصيص وبكود مختلف لكل امتحان؛ لا تحذف الأصفار إن بدأت بها الكود. احفظ التعديل وانتظر نشر GitHub Pages. تغيير الكود يفتح محاولة جديدة على المتصفح نفسه لذلك الامتحان.

الملفات عامة على GitHub Pages، وبالتالي يستطيع أي شخص يعرف كيف يفحص ملفات الموقع قراءة **كل الأكواد والإجابات**، واستخدامها من متصفح أو جهاز آخر. الأكواد هنا لتنظيم الوصول لا للتحقق الآمن من الهوية، ومنع الإعادة محلي على المتصفح فقط. لا توجد خدمة خارج GitHub ولا تحفظ النتائج على خادم.

## الشهادات الـ21 وحالة الامتحانات

تتضمن الصفحة 21 شهادة طلبتها، وامتحاناتها النظرية والتخصصية والعملية وفق قائمة Cisco الرسمية بتاريخ سبتمبر 2026. ليست شهادة CCNP امتحانًا واحدًا: عادة تحتاج Core + واحدًا من امتحانات التخصص. CCIE تحتاج امتحان Core ثم لابًا عمليًا مختلفًا. يعرض الموقع كل امتحان باسمه ورمزه وحالته؛ الامتحان غير المكتمل لا يفتح خانة الكود، واللاب يوضح أنه يحتاج بيئة عملية مستقلة. القائمة تتضمن 48 موضعًا لامتحانات داخل الشهادات الـ21 (مع تكرار الامتحانات المشتركة مثل ENCOR وSCOR)، بالإضافة إلى الشهادات الأخرى التي كانت في الموقع.

أضفنا الآن ثلاثة بنوك أصلية: CCST Networking 100-150 (40 سؤالًا تدريبيًا / 50 دقيقة)، CCST Cybersecurity 100-160 (40 / 50 دقيقة)، CCNA Cybersecurity 200-201 CCNACBR (40 / 120 دقيقة). العدد 40 تدريبي مختصر، وليس عددًا رسميًا معلنًا أو تكافؤًا مثبتًا للصعوبة. بذلك أصبح إجمالي الامتحانات القابلة للحل في الموقع 118؛ المسارات العامة المتبقية تحتاج تحديد امتحان بعينه، واللابات العملية لا يمكن اختزالها في أسئلة اختيار من متعدد. المصادر: https://www.cisco.com/site/us/en/learn/training-certifications/exams/list.html و https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-networking.html و https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-cybersecurity.html و https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccnacbr.html .

## اختبار CCST IT Support الجديد

أُضيف بنك 100-140 مستقل من 40 سؤالًا تدريبيًا أصليًا في 50 دقيقة، موزعًا على إدارة طلبات الدعم واستكشاف الأعطال والمكونات والأنظمة والشبكات والأمن. كوده الأولي في `assessment-config.js`، ويمكن تغييره مثل سائر الأكواد. عدد الأسئلة اختياري للتقييم ولا يمثل العدد الرسمي؛ المصدر: https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-it-support.html .

## Cisco Automation

أُضيف بنكان أصليان مستقلان: 200-901 CCNAAUTO و350-901 AUTOCOR، كل منهما 40 سؤالًا تدريبيًا و120 دقيقة، مع كود مستقل. محاور الأول موزعة على تطوير البرمجيات وAPIs ومنصات Cisco وأمن التطبيقات والأتمتة وأساسيات الشبكات؛ الثاني على أتمتة الشبكات والبنية ككود والتشغيل والذكاء الاصطناعي في الأتمتة. توزيع الأسئلة تدريبي وليس معايرة لصعوبة الامتحان. المصادر: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-901-CCNAAUTO_v.1.1.pdf و https://learningcontent.cisco.com/documents/marketing/exam-topics/350-901-AUTOCOR-v2.0-7-9-2025.pdf .

## عشرة اختبارات تخصصية جديدة

أُضيفت اختبارات تشخيصية مستقلة من 40 سؤالًا و90 دقيقة لكل من: ENSDWI 300-415، ENSLD 300-420، ENCC 300-440، ENNA 300-445، ENAUTO 300-435، DCNAUTO 300-635، SNCF 300-710، SISE 300-715، SSCA 300-740، SDSI 300-745. لكل امتحان كود مختلف في `assessment-config.js` ومحاور وتفسير لكل سؤال. الأسئلة أصلية للتدريب وليست أسئلة الجهات المانحة، ولم تثبت معادلتها للصعوبة أو عدد الأسئلة الرسمية. توجد مسارات عامة وامتحانات عملية خارج هذا التقييم النظري. المواصفات العامة من https://www.cisco.com/site/us/en/learn/training-certifications/exams/list.html .

## عشرون اختبارًا تشخيصيًا جديدًا

أُضيفت بنوك: DCCOR، DCID، DCIT، DCACI، DCAI، SPCOR، SPRI، SPVI، SPCNI، WLCOR، WLSD، WLSI، CBRCOR، CBRFIR، CBRTHD، CySA+، PenTest+، SecurityX، Cloud+، AZ-700. كل بنك يضم 40 سؤالًا مبنيًا على 20 مفهومًا، لكل مفهوم سيناريوهان، ولذلك تغطيته مختصرة ولا تعادل نطاق أو صعوبة أو عدد أسئلة الامتحان الرسمي. أسئلة CompTIA متعددة الخيارات فقط ولا تقدم عناصر PBQ العملية، وكذلك لا تحاكي عناصر Microsoft التفاعلية. لكل امتحان كود مستقل. بعض الأزمنة تدريبية اختيرت محليًا. راجع المواصفات الحالية من الجهات المانحة قبل حجز الامتحان. مصادر المحاور: https://www.cisco.com/site/us/en/learn/training-certifications/exams/list.html و https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-700 .

## عشرون اختبارًا جديدًا للسحابة والأمن

أُضيفت 5 بنوك Microsoft (SC-200 وSC-300 وSC-100 وSC-401 وAZ-305)، و8 بنوك AWS (Cloud Practitioner وSolutions Architect Associate/Professional وCloudOps وDeveloper وDevOps وSecurity Specialty وAdvanced Networking Specialty)، و5 بنوك Google Cloud (Digital Leader وAssociate Cloud Engineer وCloud Architect وCloud Network Engineer وCloud Security Engineer)، وبنك ISC2 CC وبنك Oracle OCI Foundations. لكل واحد كود خاص و40 سؤالًا موزعين على 20 مفهومًا بسيناريوهين. هذه تقييمات مختصرة متعددة الخيارات، ولا تساوي الصعوبة أو عدد الأسئلة الرسمي أو العناصر التفاعلية/العملية. الأزمنة تدريبية محلية ما لم يذكر خلاف ذلك. مصادر المحاور: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-200 و https://docs.aws.amazon.com/aws-certification/latest/examguides/ و https://cloud.google.com/learn/certification .

## عشرون اختبارًا إضافيًا للشبكات والأمن

أُضيفت 6 بنوك HPE Juniper (JNCIA-Junos، JNCIS-ENT، JNCIP-ENT، JNCIS-SP، JNCIP-SP، JNCIA-Cloud)، وبنكا Check Point CCSA وCCSE، وأربعة ISC2 (SSCP وCISSP وCCSP وCGRC)، وثلاثة EC-Council (CEH وCND وCHFI)، وخمسة GIAC (GSEC وGCIH وGCIA وGPEN وGWAPT). لكل بنك كود خاص و40 سؤالًا يغطي 20 مفهومًا بسيناريوهين. التقييم تشخيصي نظري مختصر، ولا يحاكي التمارين العملية أو عدد وصعوبة الأسئلة الرسمية. وقت كل بنك تدريبي محلي. CEH العملي منفصل، ولا يظهر هذا البنك على أنه CEH Practical أو CEH Master. مصادر المحاور: https://learningportal.juniper.net/juniper/user_activity_info.aspx?id=14346 و https://www.checkpoint.com/services/training/certification-program/ و https://www.isc2.org/certifications/exam-outlines و https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/ و https://www.giac.org/certifications .

## تسعة وعشرون اختبارًا تشخيصيًا جديدًا

أُضيفت بنوك مستقلة لـCCDE Written 400-007، وGIAC GCFA/GCLD/GPCS/GCFR، وISACA CISM/CISA/CRISC، وCSA CCSK، وتسعة امتحانات Huawei HCIA/HCIP/HCIE في Datacom وSecurity وCloud Computing، وستة MikroTik MTCNA/MTCRE/MTCINE/MTCWE/MTCTCE/MTCSE، وCNCF KCNA، وأربعة Oracle OCI Architect Associate/Professional وNetworking وSecurity. لكل امتحان كود مختلف و40 سؤالًا موزعة على 20 مفهومًا بسيناريوهين. هذه أسئلة تدريبية أصلية قصيرة متعددة الخيارات؛ لا تساوي عدد الأسئلة أو الصعوبة الرسمية. HCIE هنا يقيس معارف تحريرية فقط، ولا يمثل الاختبار العملي. قد تتغير أسماء الشهادات والمحاور، لذلك راجع الجهة المانحة عند الاستعداد للحجز.

## الاختبارات المتاحة الآن

Cisco CCNA 200-301 v1.1: مئة سؤال تدريبي أصلي، 120 دقيقة، توزيع محاور 20/20/25/10/15/10 وفق مخطط Cisco المنشور. Cisco تعلن الزمن والمحاور ولا تعلن عدد أسئلة ثابتًا؛ 100 هو عدد اخترناه للمحاكاة التدريبية. الأسئلة ليست رسمية ولم تُعايَر لتكون مساوية لصعوبة الامتحان الحقيقي. يعرض الموقع سؤالًا في كل شاشة، وإمكانية الرجوع والقفز لسؤال آخر، وتسليمًا آليًا عند نهاية الوقت، ودرجات حسب المحور مع تفسير الإجابات.

Microsoft AZ-900: 45 سؤالًا تدريبيًا أصليًا في 45 دقيقة. Microsoft SC-900: 45 سؤالًا تدريبيًا أصليًا في 45 دقيقة. Microsoft تعلن مدة 45 دقيقة لكل منهما ولا تعلن عدد أسئلة ثابتًا؛ العدد المختار للتدريب لا يمثل مواصفات رسمية. الأسئلة متعددة الخيارات وليست نسخًا من الامتحان ولا تتضمن العناصر التفاعلية الرسمية. المصادر: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900 و https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/ .

Fortinet NSE 4 FortiOS 7.6 Administrator: 50 سؤالًا تدريبيًا أصليًا في 100 دقيقة، ضمن نطاق Fortinet الرسمي 50–55 سؤالًا؛ الأسئلة هنا متعددة الخيارات فقط ولا تحاكي ملفات التهيئة والتقاطات الأعطال العملية. المصدر: https://training.fortinet.com/local/staticpage/view.php?page=fortios_administrator_exam .

أُضيفت بنوك أسئلة مستقلة: Cisco ENCOR (56 سؤالًا تدريبيًا / 120 دقيقة)، Cisco ENARSI (50 / 90 دقيقة)، Microsoft AZ-104 (52 / 100 دقيقة)، CompTIA Security+ SY0-701 (90 / 90 دقيقة). في Cisco وMicrosoft عدد الأسئلة اختياري للتدريب وليس عددًا رسميًا ثابتًا. CompTIA تعلن حدًا أقصى 90 سؤالًا ويتضمن الامتحان الحقيقي أسئلة اختيار متعدد وعناصر عملية؛ نسخة الموقع اختيار متعدد فقط. لا ندّعي تكافؤ الصعوبة أو الدرجة الرسمية. المصادر: https://www.cisco.com/site/us/en/learn/training-certifications/exams/encor.html و https://www.cisco.com/site/us/en/learn/training-certifications/exams/enarsi.html و https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104 و https://assets.ctfassets.net/82ripq7fjls2/6TYWUym0Nudqa8nGEnegjG/0f9b974d3b1837fe85ab8e6553f4d623/CompTIA-Security-Plus-SY0-701-Exam-Objectives.pdf .

أُضيفت كذلك بنوك تدريبية مستقلة: CompTIA A+ Core 1 (40 سؤالًا / 90 دقيقة)، A+ Core 2 (41 / 90 دقيقة)، Network+ N10-009 (40 / 90 دقيقة)، Cisco SCOR 350-701 (40 / 120 دقيقة)، Palo Alto Networks Next-Generation Firewall Engineer (40 / 90 دقيقة تدريبية اختيرت محليًا). امتحانات CompTIA الفعلية تشمل عناصر عملية وقد تصل إلى 90 سؤالًا؛ هذه البنوك تشخيصية متعددة الخيارات بعدد أقل ولا تمثل محاكاة مطابقة في العدد أو الصعوبة. وقت Palo Alto هنا وقت تدريبي اختير للموقع وليس مدة رسمية مؤكدة. المصادر: https://www.paloaltonetworks.com/services/education/palo-alto-networks-ngfw-engineer و https://www.paloaltonetworks.com/content/dam/pan/en_US/assets/pdf/datasheets/education/ngfw-engineer-datasheet.pdf و https://www.cisco.com/site/us/en/learn/training-certifications/exams/scor.html .

البنوك المكوّنة من 40–41 سؤالًا تقييمات تدريبية مختصرة مقارنة بالحد الأعلى لامتحانات CompTIA، وليست محاكاة كاملة العدد. توجد امتحانات دولية أخرى كثيرة في Cisco وMicrosoft وFortinet وPalo Alto وCompTIA لم تُبن لها أسئلة بعد. لا يعني وجود 118 اختبارًا هنا اكتمال جميع شهادات السوق. شهادات PCNSA/PCNSE وMicrosoft MS-900/AI-900 المتقاعدة لا تظهر كاختبارات حالية. 

بقية البنوك القصيرة القديمة محفوظة كمسودات داخل `assessment-questions.js` ولا تظهر للزوار حتى تتحول إلى اختبارات مطوّلة وتُراجع. امتحانات CCIE وNSE 8 العملية تحتاج لابات منفصلة؛ لا يمكن تمثيلها بدقة كاختيار من متعدد. مصدر محاور CCNA: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf

## إنهاء المحاولة من دون خدمة خارجية

بعد تسليم أي اختبار متاح تُعرض النتيجة وزر «إنهاء والخروج إلى صفحة الكود». تحفظ الصفحة علامة الإنهاء في `localStorage` وتمنع فتح الامتحان نفسه ثانية على **نفس المتصفح** مع كوده المخصص، حتى بعد إعادة تحميل الصفحة. تغيير كود امتحان معين يفتح محاولة جديدة له. مسح بيانات المتصفح أو استعمال جهاز/متصفح آخر يتجاوز هذا القيد؛ GitHub Pages وحده لا يستطيع ربط المحاولة بشخص عبر الأجهزة. الكود والإجابات موجودان في ملفات عامة ويمكن فحصهما.
