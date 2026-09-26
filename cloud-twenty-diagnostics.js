// Original, condensed study diagnostics: 20 concepts with two scenarios each per exam.
const CLOUD_BANKS=[
{id:'sc-200',name:'Microsoft SC-200 Security Operations Analyst',minutes:100,groups:[
['Sentinel',`Analytics rule|كيف تنشئ incident عند نمط أحداث متكرر؟|ما قاعدة Sentinel للكشف وفق KQL أو template؟
Data connector|كيف تدخل سجلات Entra ID إلى Sentinel؟|ما عنصر ربط مصدر logs بالـworkspace؟
KQL|كيف تستعلم عن محاولات دخول فاشلة خلال ساعة؟|ما لغة استعلام Logs في Azure Monitor؟
Workbook|كيف تعرض لوحة مؤشرات تهديدات ديناميكية؟|ما تصور تفاعلي مبني على استعلامات؟
Automation rule|كيف تعين incident عالي الخطورة تلقائيًا لفريق؟|ما آلية Sentinel لتنفيذ إجراء عند حدث؟`],
['Defender XDR',`Defender for Endpoint|كيف تعزل جهازًا وتراجع process tree؟|ما منصة كشف واستجابة على endpoints؟
Advanced hunting|كيف تبحث عبر البريد والأجهزة والهويات باستعلام موحد؟|ما واجهة KQL للصيد في Defender XDR؟
Defender for Office 365|كيف تحقق في رسالة phishing ومرفقها؟|ما خدمة حماية البريد والتعاون؟
Defender for Identity|كيف تكتشف حركة lateral على Active Directory؟|ما مستشعر وسلوك هوية هجومي؟
Incident correlation|كيف تجمع alerts مترابطة في تحقيق واحد؟|ما كائن Defender يجمع الأدلة والأصول؟`],
['Cloud Security',`Defender for Cloud|كيف تقيّم توصيات حماية موارد Azure؟|ما منصة CSPM/CWPP للموارد السحابية؟
Secure score|كيف تتابع تحسن ضوابط الحماية على الاشتراكات؟|ما مؤشر توصيات أمنية مُجمّع؟
JIT VM access|كيف تقلل تعرض RDP/SSH الدائم؟|ما منح وصول إداري مؤقت للخوادم؟
Regulatory compliance|كيف تعرض حالة ضوابط معيار معين؟|ما لوحة مطابقة controls في Defender for Cloud؟
Log Analytics workspace|أين تحفظ سجلات Sentinel وتحللها؟|ما مخزن Azure Monitor المركزي؟`],
['Response',`Playbook|كيف تنفذ خطوات احتواء عبر Logic Apps؟|ما workflow استجابة آلية في Sentinel؟
Entity investigation|كيف تربط IP وحسابًا وجهازًا في incident؟|ما عرض graph للأصول المرتبطة؟
Threat intelligence|كيف تثري IOC من مصدر خارجي؟|ما مؤشرات تغذي قواعد الكشف؟
Evidence preservation|قبل عزل جهاز وإعادة بنائه، ماذا تحفظ؟|ما سجلات وملفات وذاكرة وفق سياسة التحقيق؟
Post-incident review|كيف تحسن قاعدة الكشف بعد false positive؟|ما ضبط وتوثيق الدروس بعد الحادث؟`]
]},
{id:'sc-300',name:'Microsoft SC-300 Identity and Access Administrator',minutes:100,groups:[
['Entra Identities',`Microsoft Entra ID|ما الدليل السحابي لإدارة المستخدمين والتطبيقات؟|ما خدمة هوية Microsoft متعددة المستأجرين؟
Dynamic group|كيف تضيف أعضاء تلقائيًا وفق قسم الموظف؟|ما مجموعة تعتمد على قاعدة خصائص؟
B2B collaboration|كيف تدعو شريكًا خارجيًا دون حساب داخلي كامل؟|ما نمط وصول الضيف بين المؤسسات؟
Hybrid sync|كيف تعكس هويات on-premises في Entra؟|ما مزامنة دليل محلي للسحابة؟
Administrative unit|كيف تفوض إدارة مستخدمي فرع واحد فقط؟|ما حاوية نطاق إداري داخل المستأجر؟`],
['Authentication',`Conditional Access|كيف تفرض MFA عند خطر دخول مرتفع؟|ما سياسة قرار حسب المستخدم والجهاز والموقع؟
Passwordless FIDO2|كيف تستبدل كلمة المرور بمفتاح أمني؟|ما مصادقة مقاومة للتصيد بمفتاح مرور؟
Authentication methods policy|أين تحدد وسائل المصادقة المسموحة؟|ما سياسة تمكين FIDO2 وAuthenticator؟
Identity Protection|كيف تكتشف sign-in risk وuser risk؟|ما خدمة تقييم خطر الهوية؟
SSPR|كيف تسمح للمستخدم بإعادة ضبط كلمة مروره بنفسه؟|ما خدمة self-service password reset؟`],
['Applications',`Enterprise application|أين تضبط SSO وتعيينات مستخدمي SaaS؟|ما تمثيل service principal للتطبيق في tenant؟
App registration|كيف تعرّف تطبيقًا جديدًا لطلب API permission؟|ما كائن client ID وredirect URI في Entra؟
Federation|كيف تربط هوية Entra بتطبيق يستخدم SAML؟|ما تبادل تأكيدات تسجيل الدخول مع مزود خدمة؟
Provisioning|كيف تنشئ حسابات تطبيق SaaS تلقائيًا عند إضافة موظف؟|ما دورة مزامنة الحسابات مثل SCIM؟
Consent|من يوافق على وصول تطبيق لبيانات Graph؟|ما إدارة أذونات delegated/application؟`],
['Governance',`PIM|كيف تمنح دور admin عند الحاجة فقط لمدة محددة؟|ما إدارة امتيازات just-in-time؟
Access review|كيف تطلب من مالك التطبيق مراجعة من ما زال يحتاجه؟|ما عملية اعتماد دوري للصلاحيات؟
Entitlement management|كيف تجمع حزم وصول لمشروع محدود؟|ما access package للمجموعات والتطبيقات؟
Lifecycle workflow|كيف توقف وصول موظف غادر تلقائيًا؟|ما أتمتة مهام joiner/mover/leaver؟
Least privilege|حساب خدمة يملك Global Admin بلا داع. ما المبدأ؟|ما منح أقل دور مطلوب للمهمة؟`]
]},
{id:'sc-100',name:'Microsoft SC-100 Cybersecurity Architect',minutes:100,groups:[
['Strategy',`Zero Trust|ما نموذج تحقق مستمر لا يفترض الثقة داخل الشبكة؟|كيف تقيد الوصول وفق الهوية والجهاز والسياق؟
Threat modeling|كيف تحدد مسارات هجوم تطبيق قبل تصميم الضوابط؟|ما تحليل أصول وحدود ثقة وتهديدات؟
Defense in depth|كيف تقلل أثر فشل ضابط واحد؟|ما طبقات حماية مستقلة متعددة؟
Risk prioritization|ثغرة عامة في أصل حرج وأخرى داخلية. كيف ترتب؟|ما دمج التعرض والأثر وقابلية الاستغلال؟
Security baseline|كيف تحدد حدًا أدنى موحدًا لإعدادات المؤسسة؟|ما مرجع الضبط الذي تقاس عليه الموارد؟`],
['Identity and Data',`Conditional Access|كيف تفرض MFA لجلسات حساسة فقط؟|ما سياسة Entra السياقية؟
PIM|كيف تقلل الامتيازات الدائمة للمسؤولين؟|ما تفعيل دور مؤقت بموافقة؟
Purview sensitivity label|كيف تصنف مستندًا وتطبق تشفيرًا متوافقًا؟|ما وسم Microsoft 365 لحماية المحتوى؟
DLP|كيف تمنع مشاركة رقم بطاقة خارج المؤسسة؟|ما سياسة منع تسرب بيانات حساسة؟
Key Vault|أين تخزن مفاتيح التطبيقات وأسرارها؟|ما خدمة إدارة أسرار وشهادات Azure؟`],
['Infrastructure',`Defender for Cloud|كيف ترى وضع الحماية عبر السحابة؟|ما CSPM وتوصيات ضوابط Azure؟
Azure Firewall|كيف تطبق قواعد خروج مركزية للشبكات؟|ما جدار مُدار في hub؟
Private Endpoint|كيف تبقي وصول PaaS على عنوان خاص؟|ما واجهة Private Link داخل VNet؟
Network segmentation|كيف تحد حركة lateral بين workloads؟|ما تقسيم شبكة وسياسات أقل امتياز؟
Bastion|كيف تدير VM بلا منفذ RDP عام؟|ما خدمة وصول إداري آمن عبر portal؟`],
['Operations',`Microsoft Sentinel|كيف تربط سجلات مصادر متعددة وتحللها؟|ما SIEM/SOAR سحابي من Microsoft؟
Defender XDR|كيف تربط تهديدات الهوية والبريد والجهاز؟|ما منصة كشف واستجابة متعددة المجالات؟
Incident playbook|كيف توحد التصعيد والاحتواء؟|ما إجراءات موثقة قابلة للتنفيذ؟
Recovery plan|كيف تحدد RTO/RPO لخدمة حرجة؟|ما تصميم استمرار واستعادة مختبر؟
Security metrics|كيف تقيس تحسن الرؤية والاستجابة؟|ما MTTD/MTTR ومؤشرات فاعلية؟`]
]},
{id:'sc-401',name:'Microsoft SC-401 Information Security Administrator',minutes:100,groups:[
['Purview Information Protection',`Sensitivity label|كيف تصنف ملفًا سريًا وتشفّره؟|ما وسم محتوى Microsoft Purview؟
Label policy|كيف تنشر وسومًا لمجموعة مستخدمين؟|ما سياسة إتاحة labels للمستفيدين؟
Auto-labeling|كيف تضع تصنيفًا عند كشف بيانات مالية تلقائيًا؟|ما قاعدة تطبيق وسم بناء على المحتوى؟
Encryption|كيف تمنع قارئًا غير مصرح من فتح مستند حتى بعد نسخه؟|ما حماية محتوى مستمرة مرتبطة بالهوية؟
Trainable classifier|كيف تكتشف نوع مستندات وفق أمثلة محتوى؟|ما مصنف Purview يتعلم أنماطًا؟`],
['DLP',`DLP policy|كيف تمنع إرسال معرفات حساسة إلى بريد خارجي؟|ما قاعدة منع تسرب حسب معلومات حساسة؟
Endpoint DLP|كيف تراقب نسخ ملف حساس إلى USB؟|ما ضابط DLP على جهاز المستخدم؟
Policy tip|كيف تنبه مستخدمًا وقت مشاركة محتوى محظور؟|ما إشعار توعوي عند الفعل؟
Activity explorer|كيف تراجع نشاط نسخ ومشاركة بيانات مصنفة؟|ما لوحة Purview لأحداث المحتوى؟
Test mode|كيف تقدر أثر DLP قبل فرض المنع؟|ما محاكاة سياسة مع تسجيل النتائج؟`],
['Data Governance',`Retention label|كيف تحفظ سجلًا لمدة محددة ثم تتصرف فيه؟|ما وسم احتفاظ للمحتوى؟
Retention policy|كيف تطبق مدة احتفاظ على مواقع أو بريد واسع؟|ما سياسة زمنية لعدة مواقع بيانات؟
Records management|كيف تمنع تعديل سجل قانوني خلال احتفاظه؟|ما إدارة سجلات ثابتة ومتطلبات إتلاف؟
eDiscovery|كيف تبحث وتحفظ بيانات قضية تحقيق؟|ما أدوات جمع ومراجعة محتوى قانوني؟
Audit log|كيف تعرف من شارك ملفًا حساسًا ومتى؟|ما سجل نشاط Microsoft 365؟`],
['Risk and Compliance',`Insider Risk Management|كيف تحقق في نمط خروج بيانات من موظف مغادر؟|ما تقييم مؤشر خطر داخلي مع خصوصية؟
Communication Compliance|كيف تراجع رسائل مخالفة للسياسة وفق نطاق؟|ما مراقبة اتصالات المؤسسة بضوابط؟
Compliance Manager|كيف تتابع إجراءات ضوابط معيارية؟|ما تقييم امتثال وتوصيات تحسين؟
Data lifecycle|كيف تحدد إنشاء واستخدام وأرشفة وحذف بيانات؟|ما إدارة مراحل عمر المعلومات؟
Least privilege|كيف تقيد مسؤول Purview لوظائفه فقط؟|ما تقسيم أدوار وفق المهام؟`]
]},
{id:'az-305',name:'Microsoft AZ-305 Azure Solutions Architect',minutes:100,groups:[
['Governance',`Management group|كيف تطبق سياسة على عدة subscriptions؟|ما مستوى هرمي فوق الاشتراك؟
Azure Policy|كيف تمنع إنشاء موارد في منطقة غير مسموحة؟|ما ضابط امتثال موارد Azure؟
RBAC|كيف تمنح فريقًا قراءة resource group فقط؟|ما أدوار Azure محددة النطاق؟
Landing zone|كيف تبدأ مؤسسة متعددة فرق بحوكمة وشبكة وأمن موحد؟|ما تصميم أساس قابل للتوسع للبيئات؟
Tagging strategy|كيف توزع تكلفة الموارد على مراكز أعمال؟|ما بيانات وصفية تحكم الفوترة والجرد؟`],
['Data and Storage',`Azure SQL Database|تطبيق يحتاج قاعدة علائقية مُدارة. ما الاختيار؟|ما PaaS SQL لخدمة معاملات؟
Cosmos DB|ما قاعدة بيانات عالمية متعددة المناطق قليلة الكمون؟|ما خدمة NoSQL موزعة عالميًا؟
Blob Storage|أين تحفظ ملفات وصورًا غير مهيكلة بكميات كبيرة؟|ما object storage في Azure؟
Data redundancy|كيف تتحمل فقد منطقة تخزين؟|ما نسخ جغرافي لبيانات حسب RPO؟
Backup policy|كيف تحدد الاحتفاظ واستعادة قواعد مهمة؟|ما جدولة نسخ واختبار restore؟`],
['Compute and Apps',`App Service|تطبيق ويب لا يريد إدارة نظام الخادم. ما الخدمة؟|ما PaaS لاستضافة HTTP application؟
AKS|كيف تدير مجموعة حاويات Kubernetes؟|ما خدمة Kubernetes مُدارة من Azure؟
Azure Functions|مهمة قصيرة تُشغّل عند حدث. ما النمط؟|ما compute serverless event-driven؟
Availability zone|كيف تقلل أثر فقد مركز بيانات داخل منطقة؟|ما توزيع موارد على نطاقات توفر؟
Front Door|تطبيق عالمي يحتاج توجيه HTTP عالميًا. ما الخدمة؟|ما نقطة دخول edge لمناطق متعددة؟`],
['Network and Security',`ExpressRoute|كيف تربط مقرًا بسحابة عبر مسار خاص؟|ما اتصال Azure لا يعتمد على VPN عام؟
Private Endpoint|كيف تمنع وصول PaaS عبر الإنترنت العام؟|ما واجهة خاصة لـPrivate Link؟
Application Gateway|كيف تفحص ويب بـWAF وتوجيه مسار إقليمي؟|ما موزع Layer 7 داخل VNet؟
Key Vault|أين تدير أسرارًا وشهادات ومفاتيح تطبيق؟|ما مستودع آمن للأسرار؟
Disaster recovery|كيف تخطط لعودة الخدمة في منطقة أخرى؟|ما تصميم RTO/RPO وفشل مختبر؟`]
]},
{id:'aws-cloud-practitioner',name:'AWS Certified Cloud Practitioner',minutes:90,groups:[
['Cloud Concepts',`Elasticity|حمل يزيد ساعتين يوميًا ثم ينخفض. ما ميزة السحابة؟|ما قدرة توسيع وتقليل الموارد حسب الطلب؟
High availability|تريد استمرار الخدمة عند فشل خادم. ما الخاصية؟|ما تصميم يقلل التوقف عند فقد مكوّن؟
Shared responsibility|من يحمي بيانات العميل وإعدادات الوصول في السحابة؟|ما تقسيم مسؤوليات AWS والعميل؟
Region|كيف تختار منطقة تشغيل قريبة من المستخدمين ومتطلبات السيادة؟|ما نطاق جغرافي مستقل يضم عدة AZs؟
Availability Zone|كيف توزع تطبيقًا داخل منطقة لتحمل فشل موقع؟|ما موقع منفصل داخل Region؟`],
['Security',`IAM|كيف تمنح مستخدمًا صلاحية قراءة S3 فقط؟|ما خدمة هويات وسياسات وصول AWS؟
MFA|كيف تقلل أثر كلمة مرور مسروقة؟|ما عامل تحقق إضافي للحساب؟
KMS|أين تدير مفاتيح تشفير للموارد؟|ما خدمة مفاتيح تشفير AWS؟
CloudTrail|كيف تعرف من غيّر سياسة IAM ومتى؟|ما سجل API activity للمؤسسة؟
AWS Shield|ما الخدمة المصممة لحماية DDoS؟|كيف تخفف هجومًا حجميًا على مورد AWS؟`],
['Technology',`EC2|تحتاج خادم افتراضي وتدير نظام تشغيله. ما الخدمة؟|ما compute instance في AWS؟
Lambda|شغّل كودًا عند رفع ملف دون إدارة خادم. ما الخدمة؟|ما serverless event-driven compute؟
S3|أين تخزن ملفات كأجسام بمقياس كبير؟|ما object storage؟
RDS|تحتاج قاعدة علائقية مُدارة. ما الخدمة؟|ما managed relational database؟
VPC|كيف تنشئ نطاق شبكة منطقي خاص داخل AWS؟|ما شبكة افتراضية بعناوين subnets؟`],
['Billing and Support',`Cost Explorer|كيف ترى اتجاه المصروفات الشهرية؟|ما أداة تحليل تكلفة AWS؟
AWS Budgets|كيف تنبه فريقًا عند تجاوز حد إنفاق؟|ما إعداد عتبة مالية وتوقعها؟
On-Demand|حمل غير متوقع قصير ولا التزام طويل. ما تسعير compute؟|ما دفع حسب الاستخدام دون حجز؟
Savings Plans|حمل ثابت طويل وتريد خصمًا مقابل التزام. ما الخيار؟|ما التزام استخدام compute لفترة؟
Support plan|تحتاج مستوى استجابة دعم أعلى للإنتاج. ماذا تراجع؟|ما فئات AWS للدعم الفني؟`]
]},
{id:'aws-saa',name:'AWS Certified Solutions Architect – Associate',minutes:130,groups:[
['Resilient Design',`Multi-AZ RDS|كيف تحافظ على قاعدة بيانات عند سقوط AZ؟|ما نشر احتياطي متزامن مُدار لقاعدة RDS؟
Auto Scaling|كيف تزيد EC2 مع الطلب وتقللها عند هبوطه؟|ما مجموعة تضبط عدد instances تلقائيًا؟
Application Load Balancer|كيف توزع HTTP حسب hostname أو path؟|ما load balancer طبقة سابعة؟
S3 versioning|مستخدم حذف object خطأ. ما الضبط الذي يساعد؟|ما حفظ إصدارات متعددة لنفس المفتاح؟
Route 53 health checks|كيف تحول DNS إلى وجهة سليمة عند فشل منطقة؟|ما فحص صحة يستخدم في routing DNS؟`],
['Security',`IAM role|تطبيق EC2 يحتاج الوصول لـS3 دون مفاتيح ثابتة. ما الهوية؟|ما صلاحيات مؤقتة تُسند إلى workload؟
Security group|كيف تسمح HTTPS إلى instance فقط؟|ما firewall stateful مرتبط بالـENI؟
KMS|كيف تحمي مفاتيح تشفير EBS؟|ما خدمة إدارة مفاتيح مُدارة؟
Private subnet|قاعدة بيانات لا تحتاج عنوانًا عامًا. أين تضعها؟|ما subnet لا تملك مسارًا مباشرًا لـInternet Gateway؟
VPC endpoint|كيف تصل إلى S3 دون المرور بالإنترنت العام؟|ما اتصال خاص لخدمة AWS من VPC؟`],
['Performance',`CloudFront|مستخدمون عالميون يقرأون صورًا متكررة. ما الخدمة؟|ما CDN caching عند edge؟
ElastiCache|قراءات قاعدة بيانات متكررة ترفع الكمون. ما طبقة؟|ما cache مُدار في الذاكرة؟
DynamoDB|حمل key-value كبير يحتاج توسعًا مُدارًا. ما قاعدة؟|ما NoSQL serverless موزعة؟
SQS|كيف تفصل منتج الطلبات عن عامل معالجتها؟|ما queue رسائل لخدمات غير متزامنة؟
EFS|عدة instances تحتاج نظام ملفات POSIX مشترك. ما التخزين؟|ما file storage مُدار قابل للتركيب؟`],
['Cost',`S3 lifecycle|ملفات قديمة نادرة الوصول؛ كيف تخفض تكلفة تخزينها؟|ما سياسة نقل objects إلى طبقة أرخص؟
Spot Instances|وظيفة batch تتحمل الانقطاع. ما خيار EC2 الأرخص؟|ما سعة فائضة قابلة للسحب؟
Savings Plans|حمل compute ثابت سنة. ما نموذج خصم؟|ما التزام إنفاق للحصول على تخفيض؟
NAT Gateway cost|خروج كبير من private subnets عبر NAT مكلف. ما تراجع؟|كيف تقلل مرور S3 عبر NAT باستخدام endpoint؟
Cost allocation tags|كيف تنسب موارد الفرق لتكاليفها؟|ما وسوم فوترة للمشروعات؟`]
]},
{id:'aws-sap',name:'AWS Certified Solutions Architect – Professional',minutes:180,groups:[
['Organizational Design',`AWS Organizations|كيف تدير عدة حسابات بفوترة وحوكمة مركزية؟|ما هيكل accounts وOU في AWS؟
SCP|كيف تمنع إنشاء موارد في Region على جميع حسابات OU؟|ما حد أقصى للصلاحيات على مستوى المؤسسة؟
Control Tower|كيف تنشئ landing zone بحوكمة متعددة الحسابات؟|ما خدمة تأسيس accounts وضوابط guardrails؟
Transit Gateway|كيف تربط عشرات VPCs وفروع بشكل hub؟|ما موجه شبكات مركزي عابر للحسابات؟
RAM|كيف تشارك موردًا مدعومًا بين حسابات AWS؟|ما Resource Access Manager؟`],
['Migration',`DMS|كيف تنقل قاعدة بيانات مع تقليل توقف التطبيق؟|ما خدمة ترحيل قواعد بيانات وتكرار تغييرات؟
DataSync|كيف تنقل ملفات من NAS إلى S3 بكفاءة؟|ما خدمة مزامنة بيانات بين المواقع؟
Direct Connect|ما مسار خاص لمركز بيانات إلى AWS؟|ما اتصال مخصص غير نفق Internet؟
Migration Hub|كيف تتابع تقدم موجات نقل عدة تطبيقات؟|ما لوحة تتبع ترحيل workloads؟
Snowball|حجم بيانات ضخم ووصلات ضعيفة. ما نقل فعلي؟|ما جهاز AWS لنقل بيانات offline؟`],
['Resilience',`Active-active|كيف تخدم منطقتان مستخدمين في وقت واحد؟|ما تصميم متعدد Regions يعمل بالتوازي؟
RTO|خدمة يجب أن تعود خلال ساعة. ما الهدف؟|ما حد زمن استعادة؟
RPO|تقبل فقد خمس دقائق بيانات. ما الهدف؟|ما حد نقطة استعادة؟
Route 53 failover|كيف تحول endpoint عند فشل خدمة إقليمية؟|ما سياسة DNS بفحص صحة وبديل؟
S3 replication|كيف تنسخ objects إلى Region أخرى تلقائيًا؟|ما خاصية نسخ عبر المناطق؟`],
['Security and Optimization',`KMS multi-Region key|كيف تسهل تشفير موارد في عدة Regions بمادة مرتبطة؟|ما نمط مفاتيح يدعم نسخًا جغرافيًا؟
PrivateLink|كيف تعرض خدمة خاصة لحساب آخر دون peering كامل؟|ما واجهة endpoint لخدمة محددة؟
Well-Architected review|كيف تقيم تصميمًا عبر محاور الأمان والموثوقية والكلفة؟|ما إطار AWS لمراجعة المعمارية؟
Cost allocation|كيف تعزل تكلفة وحدات أعمال متعددة؟|ما حسابات ووسوم وتقارير فوترة؟
Bedrock Guardrails|تطبيق GenAI يحتاج قيود محتوى. ما ضابط؟|ما آلية فلترة ومدى سياسات الاستجابة؟`]
]},
{id:'aws-cloudops',name:'AWS Certified CloudOps Engineer – Associate',minutes:130,groups:[
['Monitoring',`CloudWatch metric|كيف ترى CPU واستخدام تطبيق عبر الزمن؟|ما قياس رقمي دوري في AWS؟
CloudWatch alarm|كيف تنبه عند تجاوز threshold؟|ما حالة metric تحفز إجراء؟
CloudTrail|كيف تعرف من حذف security group؟|ما سجل API calls والتغييرات؟
X-Ray|كيف تتبع طلبًا بين خدمات microservices؟|ما distributed tracing على AWS؟
EventBridge|كيف توجه حدث تشغيل إلى هدف تلقائيًا؟|ما event bus لقواعد استجابة؟`],
['Deployment',`CloudFormation|كيف تنشر نفس البنية من template؟|ما IaC أصلي لـAWS؟
Systems Manager|كيف تدير patch وأوامر أسطول EC2؟|ما منصة عمليات على instances؟
Auto Scaling|كيف تحافظ على عدد مطلوب من instances؟|ما مجموعة توسع واستبدال تلقائي؟
CodeDeploy|كيف تنشر إصدار تطبيق على instances بآلية؟|ما خدمة release deployment؟
AWS Backup|كيف تدير نسخ عدة موارد بسياسة موحدة؟|ما خدمة نسخ احتياطي مركزية؟`],
['Reliability',`Multi-AZ|كيف تتحمل سقوط مركز توافر؟|ما توزيع موارد عبر AZs؟
Health checks|كيف تمنع توجيه مرور لخادم لا يستجيب؟|ما فحص دوري لصحة target؟
Runbook|كيف توحد خطوات استعادة خدمة عند إنذار؟|ما إجراءات تشغيل موثقة قابلة للأتمتة؟
RPO|كيف تحد أقصى فقد بيانات في التعافي؟|ما هدف نقطة الاستعادة؟
RTO|كيف تحد أقصى مدة توقف مقبولة؟|ما هدف زمن التعافي؟`],
['Security and Network',`IAM least privilege|عامل نشر يحتاج S3 فقط. ما الأذونات؟|ما سياسة أقل امتياز للمهمة؟
VPC flow logs|كيف تعرف قبول أو رفض تدفق شبكة؟|ما سجل metadata لمرور VPC؟
NAT gateway|كيف تخرج EC2 خاصة للإنترنت دون inbound مباشر؟|ما خدمة ترجمة خروج subnet خاصة؟
GuardDuty|كيف تكتشف سلوك تهديد من سجلات متعددة؟|ما كشف تهديدات AWS مُدار؟
Config|كيف تكشف تغيّر resource عن قاعدة امتثال؟|ما تاريخ إعدادات وضوابط موارد AWS؟`]
]},
{id:'aws-developer',name:'AWS Certified Developer – Associate',minutes:130,groups:[
['Development',`Lambda|كود يعمل عند حدث S3 دون خادم. ما الخدمة؟|ما function serverless event-driven؟
API Gateway|كيف تنشر HTTP API مع throttling ومصادقة؟|ما واجهة مُدارة أمام Lambda؟
DynamoDB|تطبيق key-value يحتاج throughput مرنًا. ما قاعدة؟|ما NoSQL مُدارة لـAWS؟
SQS|كيف تفصل كتابة طلبات عن معالجتها؟|ما queue رسائل durable؟
SNS|كيف ترسل إشعارًا لمستهلكين متعددين؟|ما pub/sub fan-out service؟`],
['Security',`IAM execution role|Lambda تحتاج قراءة S3. كيف تمنحها صلاحية مؤقتة؟|ما هوية runtime للوظيفة؟
Secrets Manager|كيف تحفظ كلمة مرور DB مع دوران آلي؟|ما خدمة تخزين أسرار وتدوير؟
KMS|كيف تشفر بيانات باستخدام مفتاح مُدار؟|ما خدمة مفاتيح AWS؟
Cognito|كيف تدير مستخدمي تطبيق الويب وتسجيلهم؟|ما خدمة هوية العملاء؟
Signed URL|كيف تمنح تنزيل S3 مؤقتًا دون جعل bucket عامًا؟|ما رابط مُوقع محدود المدة؟`],
['Deployment',`CodePipeline|كيف تنظم build/test/deploy بتتابع؟|ما خدمة orchestration لـCI/CD؟
CodeBuild|كيف تبني تطبيقًا في بيئة مُدارة؟|ما خدمة تشغيل buildspec؟
CodeDeploy|كيف تنفذ blue/green لـLambda أو EC2؟|ما خدمة نشر إصدارات؟
CloudFormation|كيف تنشر الموارد كتعريف مراجَع؟|ما template infrastructure as code؟
Environment variables|كيف تضبط إعدادًا مختلفًا بين dev/prod دون تعديل المصدر؟|ما متغير تكوين runtime؟`],
['Observability',`CloudWatch Logs|أين تراجع stdout وخطأ Lambda؟|ما خدمة تجميع سجلات التطبيقات؟
X-Ray|طلب بطيء عبر ثلاث خدمات. كيف تتبع مساره؟|ما trace موزع؟
Dead-letter queue|فشلت معالجة حدث مرارًا. أين تحفظه؟|ما queue لأحداث لم تُعالج؟
Idempotency|حدث أعيد تسليمه مرتين. كيف تمنع إنشاء طلبين؟|ما مفتاح أو تحقق يجعل المعالجة آمنة عند التكرار؟
Retry backoff|API يعيد 429. كيف تعاود بشكل آمن؟|ما تدرج انتظار مع jitter وحد محاولات؟`]
]},
{id:'aws-devops',name:'AWS Certified DevOps Engineer – Professional',minutes:180,groups:[
['SDLC Automation',`CodePipeline|كيف تربط source وbuild وdeploy بموافقات؟|ما workflow CI/CD مُدار في AWS؟
CodeBuild|كيف تختبر تطبيقًا في بيئة build مؤقتة؟|ما خدمة تنفيذ buildspec؟
CodeDeploy|كيف تنشر blue/green على EC2 أو Lambda؟|ما أداة rollout والتراجع؟
CloudFormation StackSets|كيف تنشر قالبًا عبر حسابات ومناطق؟|ما إدارة stacks متعددة الأهداف؟
Artifact signing|كيف تثبت مصدر صورة قبل نشرها؟|ما تحقق سلامة وتوقيع حزم الإصدار؟`],
['Configuration',`Systems Manager Parameter Store|أين تحفظ تكوينًا مركزيًا مع صلاحيات؟|ما مخزن قيم تكوين هرمي؟
Secrets Manager|كيف تدير كلمة مرور DB ودورانها؟|ما مستودع أسرار مُدار؟
AWS Config|كيف تكتشف انحراف إعداد S3 عن قاعدة؟|ما مراقبة تاريخ التهيئة والامتثال؟
OpsWorks/automation|كيف توحد أعمال الضبط المتكررة على الخوادم؟|ما إدارة تكوين عبر أتمتة إجراءات؟
Change set|كيف تراجع تأثير تعديل CloudFormation قبل التنفيذ؟|ما عرض تغييرات stack المقترحة؟`],
['Resilient Operations',`CloudWatch composite alarm|كيف تقلل إنذارًا من مؤشرين منفصلين؟|ما alarm تجمع حالات متعددة منطقيًا؟
Auto Scaling|كيف تعوض instance فاشلة تلقائيًا؟|ما ضبط desired capacity بناء على health؟
Multi-Region failover|كيف تستمر خدمة عند فشل Region؟|ما تحويل مرور لخطة منطقة ثانية؟
Chaos experiment|كيف تختبر قدرة نظام على تحمل سقوط مورد؟|ما تجربة فشل مضبوطة؟
Runbook automation|كيف تستجيب لإنذار معروف بخطوات معتمدة؟|ما إجراء تشغيلي آلي قابل للتدقيق؟`],
['Security and Observability',`CloudTrail|من غيّر IAM policy؟|ما سجل أحداث API على مستوى الحساب؟
GuardDuty|كيف تكتشف نشاطًا شاذًا من سجلات AWS؟|ما كشف تهديدات مُدار؟
X-Ray|كيف تعزل بطء خطوة ضمن طلب موزع؟|ما tracing للخدمات؟
Least-privilege role|كيف تحد صلاحيات pipeline للنشر فقط؟|ما دور IAM حسب المهمة والبيئة؟
Post-deployment validation|كيف تثبت أن release لم يضر التطبيق؟|ما اختبارات health ومؤشرات بعد النشر؟`]
]},
{id:'aws-security-specialty',name:'AWS Certified Security – Specialty',minutes:170,groups:[
['Detection and Response',`GuardDuty|كيف تكشف تهديدات من VPC وDNS وCloudTrail؟|ما خدمة كشف مُدارة لسلوك مريب؟
Security Hub|كيف تجمع findings من حسابات وخدمات؟|ما مركز وضع أمن AWS؟
Detective|كيف تستكشف علاقات الموارد والأحداث بعد finding؟|ما تحليل رسم بياني للحوادث؟
CloudTrail|كيف تثبت من استدعى API لتغيير KMS policy؟|ما سجل نشاط الإدارة؟
EventBridge|كيف تؤتمت احتواء عند finding محددة؟|ما توجيه حدث إلى Lambda أو workflow؟`],
['Infrastructure Security',`Security group|كيف تسمح port محدد إلى EC2؟|ما firewall stateful للواجهات؟
Network ACL|كيف تضيف قيدًا stateless على subnet؟|ما filter قواعد دخول وخروج subnet؟
AWS WAF|كيف تمنع نمط SQLi على HTTP؟|ما حماية طلبات ويب؟
Shield|كيف تخفف هجوم DDoS حجمي؟|ما خدمة حماية الشبكة الطرفية؟
VPC endpoint|كيف تصل خدمة AWS من شبكة خاصة دون Internet؟|ما مسار خاص إلى خدمة مدعومة؟`],
['Data Protection',`KMS key policy|كيف تقيد استعمال مفتاح لتطبيق فقط؟|ما سياسة مفتاح مستقلة عن IAM؟
CloudHSM|تحتاج تحكمًا مخصصًا بعتاد التشفير. ما الخدمة؟|ما HSM مُدار بعزل مفاتيح؟
S3 Block Public Access|كيف تمنع كشف bucket حتى مع ACL خاطئة؟|ما ضابط S3 عام ضد الإتاحة العامة؟
Macie|كيف تكتشف بيانات حساسة داخل S3؟|ما تصنيف وحماية بيانات باستخدام ML؟
Secrets Manager|كيف تدير أسرار DB وتدويرها؟|ما خدمة أسرار مُدارة؟`],
['Identity and Governance',`Organizations SCP|كيف تمنع عمليات في جميع حسابات OU؟|ما سقف أذونات المؤسسة؟
IAM Access Analyzer|كيف تكتشف موردًا مشاركًا خارج المنظمة؟|ما تحليل وصول خارجي للسياسات؟
AssumeRole|كيف يمنح حساب مركزي وصولًا مؤقتًا لحساب آخر؟|ما تبادل role عبر STS؟
MFA|كيف تحمي دخول المسؤول بعامل إضافي؟|ما تحقق متعدد العوامل؟
AWS Config|كيف تراقب تهيئة مورد مقابل معيار؟|ما سجل امتثال وتهيئة موارد؟`]
]},
{id:'aws-networking-specialty',name:'AWS Certified Advanced Networking – Specialty',minutes:170,groups:[
['Network Design',`Transit Gateway|كيف تربط عشرات VPCs وفروع عبر hub؟|ما موجه مركزي لاتصالات AWS؟
VPC peering|كيف تربط شبكتين VPC مباشرة دون transit؟|ما اتصال غير انتقالي بين VPCs؟
Direct Connect|كيف تنشئ وصلة خاصة من الموقع إلى AWS؟|ما اتصال مخصص بعيد عن الإنترنت العام؟
PrivateLink|كيف تعرض خدمة لحساب آخر دون اتصال شبكي كامل؟|ما endpoint خاص لخدمة محددة؟
IPAM|كيف تدير CIDRs عبر حسابات ومناطق دون تداخل؟|ما خدمة إدارة عناوين IP؟`],
['Routing',`BGP|كيف تتبادل prefixes ديناميكيًا مع DX أو VPN؟|ما بروتوكول إعلان مسارات بين الطرفين؟
Route table|Subnet خاص لا يصل NAT. ما العنصر تفحص؟|ما ربط destination بـnext hop داخل VPC؟
Prefix list|كيف تعيد استخدام مجموعة CIDRs في قواعد ومسارات؟|ما قائمة عناوين مُدارة مشتركة؟
Route propagation|مسار VPN لا يظهر على TGW table. ما إعداد؟|ما نشر routes من attachment إلى جدول transit؟
Asymmetric routing|Firewall stateful يسقط ردًا يسلك مسارًا آخر. ما السبب؟|ما اختلاف اتجاه الذهاب والإياب؟`],
['Hybrid and DNS',`Site-to-Site VPN|كيف تضيف مسارًا مشفرًا عبر Internet للفرع؟|ما نفق IPsec نحو AWS؟
Route 53 Resolver inbound endpoint|كيف تحل أسماء private hosted zone من on-premises؟|ما نقطة DNS دخول استعلامات هجينة؟
Route 53 Resolver outbound endpoint|كيف ترسل استعلامات AWS إلى DNS محلي؟|ما DNS forwarding خارج VPC؟
Private hosted zone|كيف تنشئ DNS داخليًا مرتبطًا بـVPC؟|ما نطاق أسماء خاص في Route 53؟
Global Accelerator|كيف تختار أقرب نقطة دخول AWS لتطبيق TCP عالمي؟|ما anycast edge عالمي غير CDN cache؟`],
['Security and Monitoring',`VPC Flow Logs|كيف ترى metadata لحركة accepted/rejected؟|ما سجلات تدفق من ENI أو subnet؟
Network Firewall|كيف تطبق فحص مرور شبكة مُدار في VPC؟|ما جدار firewall مركزي للتدفقات؟
Reachability Analyzer|كيف تعرف سبب عدم وصول ENI لأخرى في config؟|ما تحليل مسار منطقي بين نقطتين؟
Traffic Mirroring|كيف ترسل نسخ حزم من ENI لأداة تحليل؟|ما نسخ حركة الشبكة للتفتيش؟
CloudWatch metrics|كيف ترصد packet drop أو throughput على اتصال؟|ما قياس ومؤشرات شبكة عبر الزمن؟`]
]},
{id:'google-digital-leader',name:'Google Cloud Digital Leader',minutes:90,groups:[
['Digital Transformation',`Cloud elasticity|ما الميزة عند زيادة موارد تطبيق حسب موسم؟|كيف تتجنب شراء سعة ثابتة لكل ذروة؟
Data-driven decision|كيف تستفيد شركة من تحليل بياناتها لاتخاذ قرار؟|ما دور البيانات في تحسين العمليات؟
Shared responsibility|من يضبط صلاحيات بياناته في السحابة؟|ما تقسيم دور العميل والمزود؟
Global infrastructure|كيف تخدم مستخدمين قريبًا من مناطق مختلفة؟|ما استخدام Regions وشبكة عالمية؟
Sustainability|كيف قد يقل الهدر عبر تحسين استخدام الموارد؟|ما فائدة مشاركة بنية سحابية عالية الكفاءة؟`],
['Compute and Apps',`Compute Engine|تحتاج VM وتدير نظامها. ما الخدمة؟|ما IaaS للحوسبة في Google Cloud؟
Cloud Run|تطبيق حاويات HTTP دون إدارة cluster. ما الخدمة؟|ما serverless container platform؟
Google Kubernetes Engine|كيف تدير أحمال Kubernetes؟|ما GKE لخدمات الحاويات؟
Cloud Functions|مهمة قصيرة تستجيب لحدث. ما النمط؟|ما event-driven function مُدارة؟
App Engine|تطبيق ويب PaaS دون إدارة بنية خوادم. ما الخدمة؟|ما منصة تشغيل تطبيقات مُدارة؟`],
['Data and AI',`Cloud Storage|أين تحفظ صورًا وملفات كأجسام؟|ما object storage في Google Cloud؟
BigQuery|كيف تحلل بيانات ضخمة باستعلام SQL مُدار؟|ما data warehouse serverless؟
Cloud SQL|تطبيق يحتاج قاعدة علائقية مُدارة. ما الخدمة؟|ما MySQL/PostgreSQL/SQL Server مُدار؟
Vertex AI|كيف تبني وتدير نماذج ML؟|ما منصة تعلم آلي مُدارة؟
Pub/Sub|كيف تفصل منتج أحداث عن مستهلكين؟|ما خدمة رسائل asynchronous؟`],
['Security and Operations',`IAM|كيف تمنح فريقًا قراءة مشروع فقط؟|ما أدوار Google Cloud وربطها بالهوية؟
Cloud Logging|أين تبحث عن سجلات التطبيقات والتدقيق؟|ما منصة log aggregation؟
Cloud Monitoring|كيف تعرض مؤشرات الخدمة وتطلق إنذارًا؟|ما خدمة metrics وalerts؟
VPC|كيف تنشئ شبكة منطقية خاصة للموارد؟|ما نطاق شبكة Google Cloud؟
Billing budgets|كيف تنبه مالك مشروع عند زيادة الإنفاق؟|ما حد تكلفة وإشعار مالي؟`]
]},
{id:'google-ace',name:'Google Associate Cloud Engineer',minutes:120,groups:[
['Setup',`Project|كيف تعزل فوترة وموارد تطبيق جديد؟|ما حاوية موارد أساسية في Google Cloud؟
Billing account|ما الذي يجب ربطه بمشروع مدفوع؟|ما كيان فوترة المشاريع؟
IAM role|كيف تمنح صلاحية تشغيل VM دون Owner؟|ما مجموعة أذونات أقل امتياز؟
Organization policy|كيف تمنع إنشاء موارد في منطقة معينة؟|ما قيد حوكمة على مجلد/مؤسسة؟
gcloud CLI|كيف تدير موارد من الطرفية؟|ما أداة أوامر Google Cloud؟`],
['Deployment',`Compute Engine|كيف تنشئ خادم VM بنظام تتحكم به؟|ما خدمة مثيلات حوسبة؟
Cloud Run|كيف تنشر container HTTP دون cluster؟|ما خدمة تشغيل حاوية مُدارة؟
GKE|كيف تنشر Deployment وService Kubernetes؟|ما cluster Kubernetes مُدار؟
Cloud Storage|كيف تحفظ ملفات تطبيق كobjects؟|ما buckets لتخزين غير مهيكل؟
Cloud SQL|كيف تنشر قاعدة PostgreSQL مُدارة؟|ما خدمة قواعد علائقية؟`],
['Operations',`Cloud Monitoring alert|كيف تنبه عند CPU مرتفع مدة محددة؟|ما سياسة إنذار لقياس؟
Cloud Logging query|كيف تبحث عن خطأ خدمة خلال فترة؟|ما استعلام سجلات مركزي؟
Instance group|كيف تحافظ على عدد VMs وتطبق autoscaling؟|ما مجموعة instances مُدارة؟
Snapshot|كيف تحتفظ بنسخة قرص قبل تحديث؟|ما صورة استعادة لقرص persistent disk؟
Cloud Scheduler|كيف تشغّل مهمة زمنية دورية؟|ما خدمة جدولة مهام مُدارة؟`],
['Network and Security',`VPC firewall rule|كيف تسمح HTTPS إلى tag محدد؟|ما قاعدة شبكة للمصادر والأهداف والبروتوكول؟
Cloud NAT|VM خاصة تحتاج outbound دون عنوان عام. ما الخدمة؟|ما ترجمة خروج مُدارة؟
Private Google Access|كيف تصل VM بلا IP عام إلى Google APIs؟|ما مسار داخلي للخدمات المدعومة؟
Service account|كيف تمنح تطبيقًا هوية غير بشرية؟|ما حساب workload وIAM خاص به؟
Secret Manager|كيف تخزن مفتاح API خارج المصدر؟|ما خدمة إدارة أسرار Google Cloud؟`]
]},
{id:'google-pca',name:'Google Professional Cloud Architect',minutes:120,groups:[
['Solution Design',`Well-architected review|كيف توازن الأمان والتوافر والتكلفة والأداء؟|ما مراجعة معمارية بمحاور واضحة؟
Managed service|شركة تريد تقليل عبء تشغيل البنية. ما الاختيار العام؟|ما PaaS أو serverless عند ملاءمة المتطلبات؟
Multi-region design|خدمة عالمية يجب أن تتحمل فقد Region. ما النمط؟|كيف توزع تطبيقًا وبياناته جغرافيًا؟
RTO/RPO|كيف تحول متطلبات التعافي إلى تصميم؟|ما حد زمن توقف وفقد بيانات؟
Migration wave|كيف تنقل تطبيقات متعددة مع ترتيب الاعتمادات؟|ما تجميع مراحل ترحيل وفق المخاطر؟`],
['Compute and Data',`GKE|نظام microservices يحتاج orchestration للحاويات. ما الخيار؟|ما Kubernetes مُدار؟
Cloud Run|خدمة HTTP متقطعة بلا إدارة cluster. ما الخدمة؟|ما حاويات serverless؟
BigQuery|تحليل petabytes بـSQL دون إدارة خوادم. ما الخدمة؟|ما warehouse مُدار؟
Spanner|معاملات علائقية عالمية وقابلية توسع أفقية. ما الخدمة؟|ما قاعدة موزعة قوية الاتساق؟
Cloud Storage lifecycle|ملفات قديمة نادرة القراءة. كيف تخفض كلفتها؟|ما سياسة نقل object إلى storage class؟`],
['Networking and Security',`Shared VPC|كيف تشارك شبكة مركزية مع مشاريع فرق مختلفة؟|ما فصل إدارة الشبكة عن مشاريع التطبيقات؟
Cloud Interconnect|كيف تربط مقرًا بمسار خاص إلى Google؟|ما اتصال مخصص هجين؟
Cloud Load Balancing|كيف توزع طلبات عالميًا إلى backends سليمة؟|ما موازنة حمل عالمية؟
IAM least privilege|كيف تمنح خدمة بيانات محددة فقط؟|ما دور محدود النطاق؟
VPC Service Controls|كيف تقلل خطر تسرب بيانات خدمات مدعومة خارج المحيط؟|ما security perimeter لخدمات Google؟`],
['Operations and Business',`SLO|كيف تعرّف مستوى موثوقية قابلًا للقياس؟|ما هدف لمؤشر مثل نسبة النجاح؟
Cloud Monitoring|كيف تربط مؤشرات خدمة بتنبيه؟|ما منصة metrics وdashboards؟
Cost labels|كيف تنسب الإنفاق لفرق العمل؟|ما metadata للفوترة والجرد؟
Change management|كيف تقلل خطر نشر تطبيق جديد؟|ما canary/rollback واختبارات بعد النشر؟
Case study requirements|عند اختيار خدمة في سيناريو معقد، ما تبدأ به؟|ما قيود الأعمال والأمن والأداء قبل اختيار المنتج؟`]
]},
{id:'google-pcne',name:'Google Professional Cloud Network Engineer',minutes:120,groups:[
['VPC Design',`Shared VPC|كيف تدير شبكة مشتركة عبر service projects؟|ما host project لشبكات فرق متعددة؟
VPC peering|كيف تربط شبكتين VPC خاصتين مباشرة؟|ما ربط غير انتقالي بين VPCs؟
Cloud NAT|كيف تتيح خروج VMs بلا IP عام؟|ما ترجمة outbound مُدارة؟
Private Service Connect|كيف تصل خدمة من VPC عبر endpoint خاص؟|ما نشر واستهلاك خدمة خاصة؟
IP address management|كيف تمنع CIDR overlap بين مشاريع وفروع؟|ما خطة عنوان وتخصيص مركزي؟`],
['Hybrid Routing',`Cloud Interconnect|كيف تنشئ اتصالًا خاصًا من مقر؟|ما Dedicated/Partner connectivity؟
Cloud VPN|كيف تربط موقعًا عبر IPsec Internet؟|ما HA VPN لأنفاق مشفرة؟
Cloud Router|كيف تتبادل BGP routes ديناميكيًا؟|ما مكوّن إعلان مسارات للشبكات الهجينة؟
Route priority|عند مسارين لنفس prefix، ما عامل مقارنة؟|ما اختيار based on prefix and priority؟
Network Connectivity Center|كيف تدير hub لشبكات ومواقع متعددة؟|ما خدمة اتصال hub-and-spoke؟`],
['Application Delivery',`External Application Load Balancer|كيف توزع HTTPS عالميًا حسب URL؟|ما موازن Layer 7 خارجي؟
Internal Load Balancer|كيف تقدم خدمة خاصة خلف عنوان داخلي؟|ما توزيع داخلي للـbackends؟
Cloud DNS|كيف تدير zones وأسماء الخدمات؟|ما DNS عام أو خاص مُدار؟
Cloud CDN|كيف تخزن محتوى متكرر قرب المستخدم؟|ما cache edge على load balancer؟
Health check|Backend معطل ما زال يستقبل طلبات. ماذا تضبط؟|ما قياس صلاحية target؟`],
['Security and Operations',`Firewall policy|كيف تفرض قواعد على عدة VPCs بمستوى تنظيمي؟|ما policy هرمية للشبكة؟
Cloud Armor|كيف تحمي HTTP من WAF وDDoS؟|ما edge security policy للتطبيق؟
VPC Flow Logs|كيف ترى metadata للمرور المقبول والمرفوض؟|ما سجلات تدفق subnet؟
Packet Mirroring|كيف ترسل نسخ حزم إلى أداة فحص؟|ما نسخ traffic لتحليل أمني؟
Connectivity Tests|كيف تعرف سبب فشل مسار بين نقطتين؟|ما تحليل تكوين الشبكة لمسار متوقع؟`]
]},
{id:'google-pcse',name:'Google Professional Cloud Security Engineer',minutes:120,groups:[
['Identity',`IAM conditional binding|كيف تمنح دورًا فقط ضمن وقت أو شرط؟|ما شرط على role assignment؟
Workload Identity Federation|كيف تمنح workload خارجيًا وصولًا دون مفتاح ثابت؟|ما اتحاد هوية لتبادل credentials مؤقتة؟
Service account|كيف تفصل هوية تطبيق عن المستخدم؟|ما حساب غير بشري لخدمات Google؟
Organization policy|كيف تمنع إنشاء public IPs على مستوى المؤسسة؟|ما قيود موارد مركزية؟
Least privilege|كيف تقلل صلاحية Project Owner واسعة؟|ما دور أدق للعمل المطلوب؟`],
['Data Protection',`Cloud KMS|كيف تدير مفاتيح تشفير موارد؟|ما خدمة مفاتيح Google Cloud؟
Secret Manager|كيف تخزن API token وتدوّره؟|ما خدمة أسرار مُدارة؟
Cloud DLP|كيف تكتشف بيانات شخصية في dataset؟|ما Sensitive Data Protection لفحص المحتوى؟
VPC Service Controls|كيف تحيط خدمات بيانات لتقليل exfiltration؟|ما service perimeter؟
CMEK|كيف تستخدم مفتاحًا يتحكم فيه العميل لتشفير خدمة مدعومة؟|ما customer-managed encryption key؟`],
['Network and Compute',`Cloud Armor|كيف تحظر هجمات ويب على edge؟|ما WAF/DDoS policy للـload balancer؟
Cloud NAT|كيف تمنع public IP عن VM مع إبقاء outbound؟|ما ترجمة خروج مُدارة؟
Private Service Connect|كيف تصل خدمة خاصة دون شبكة عامة؟|ما endpoint خاص بين المستهلك والمنتج؟
Binary Authorization|كيف تمنع نشر صورة container غير معتمدة؟|ما سياسة توقيع واعتماد image؟
Security Command Center|كيف تجمع findings عن موارد Google؟|ما مركز وضع أمن السحابة؟`],
['Monitoring and Response',`Cloud Audit Logs|من غيّر IAM policy؟|ما سجل إجراءات الإدارة والوصول؟
Event Threat Detection|كيف تكتشف سلوكًا مريبًا من logs؟|ما كشف تهديدات مُدار؟
Cloud Logging|أين تبحث عن سجلات متعددة المشاريع؟|ما منصة تجميع واستعلام السجلات؟
Incident playbook|كيف توحد احتواء حساب مخترق؟|ما خطوات عزل وتدوير وتوثيق؟
Posture management|كيف تقيس انحراف الموارد عن baseline؟|ما تقييم ضوابط مستمر عبر المشاريع؟`]
]},
{id:'isc2-cc',name:'ISC2 Certified in Cybersecurity — CC',minutes:120,groups:[
['Security Principles',`Confidentiality|كيف تمنع مستخدمًا غير مخول من قراءة ملف؟|ما ضلع CIA الذي يحمي السرية؟
Integrity|كيف تكتشف تعديل ملف دون تصريح؟|ما ضلع CIA المرتبط بصحة البيانات؟
Availability|كيف تبقي الخدمة عاملة عند فشل خادم؟|ما ضلع CIA المرتبط باستمرار الوصول؟
Least privilege|كيف تمنح المستخدم أقل صلاحية لازمة؟|ما مبدأ تقليل الأذونات؟
Risk assessment|كيف توازن احتمال تهديد مع أثره؟|ما تقدير المخاطر للأصول؟`],
['Business Continuity',`RTO|كم يمكن للخدمة أن تتوقف؟ ما المؤشر؟|ما الزمن المستهدف للاستعادة؟
RPO|كم بيانات يمكن أن تضيع زمنيًا؟ ما المؤشر؟|ما نقطة الاستعادة المقبولة؟
Backup restore test|لماذا تجرب إعادة نسخة احتياطية؟|ما إثبات صلاحية النسخة للتعافي؟
Incident response plan|كيف تحدد الأدوار والخطوات عند هجوم؟|ما وثيقة الاستجابة للحوادث؟
BIA|كيف ترتب خدمات المؤسسة عند الكارثة؟|ما تحليل أثر توقف الأعمال؟`],
['Access Controls',`MFA|كيف تضيف عاملًا مستقلًا لكلمة المرور؟|ما مصادقة متعددة العوامل؟
RBAC|كيف تربط صلاحية المستخدم بدوره الوظيفي؟|ما تحكم وصول قائم على الدور؟
Physical access log|كيف تعرف من دخل غرفة السيرفر؟|ما سجل دخول مادي؟
Account deprovisioning|موظف ترك العمل. ماذا تفعل؟|ما إلغاء حساباته وجلساته سريعًا؟
Separation of duties|كيف تمنع شخصًا واحدًا من طلب عملية واعتمادها؟|ما فصل مسؤوليات يقلل إساءة الاستخدام؟`],
['Network and Operations',`Firewall|كيف تمنع منفذًا غير مصرح به على الحدود؟|ما مرشح حركة الشبكة؟
VPN|كيف تحمي اتصال موظف بعيد عبر الإنترنت؟|ما نفق مشفر للوصول البعيد؟
IDS|كيف تتلقى تنبيهًا عند نمط هجوم دون منع مباشر؟|ما كشف التسلل؟
Patch management|كيف تغلق ثغرات نظام معروفة دوريًا؟|ما تحديث منظم للبرامج؟
Phishing reporting|وصل رابط مشبوه باسم الدعم. ما التصرف؟|ما تحقق مستقل وإبلاغ عبر قناة معتمدة؟`]
]},
{id:'oracle-oci-foundations',name:'Oracle OCI Foundations',minutes:90,groups:[
['OCI Core',`Region|كيف تختار نطاقًا جغرافيًا لتشغيل الموارد؟|ما منطقة OCI تضم Availability Domains؟
Availability Domain|كيف تفصل الموارد عن فشل مركز بيانات داخل Region؟|ما نطاق مادي مستقل للخدمات؟
Compartment|كيف تعزل إدارة وفوترة مجموعة موارد منطقيًا؟|ما حاوية OCI للموارد والسياسات؟
Tenancy|ما الجذر الإداري لمؤسسة على OCI؟|ما مساحة حساب Oracle Cloud الأساسية؟
IAM policy|كيف تمنح مجموعة قراءة موارد compartment؟|ما قاعدة allow group to inspect؟`],
['Compute and Storage',`Compute instance|كيف تشغّل VM بنظام تديره؟|ما مورد حوسبة OCI؟
Object Storage|أين تحفظ ملفات غير مهيكلة كobjects؟|ما buckets تخزين قابل للتوسع؟
Block Volume|ما قرص دائم يُربط بـinstance؟|ما storage بحجم كتلي للـVM؟
File Storage|كيف تشارك ملفات NFS بين خوادم؟|ما خدمة ملفات مُدارة؟
Autonomous Database|كيف تقلل إدارة قاعدة Oracle وتحديثها؟|ما قاعدة مُدارة ذاتية التشغيل؟`],
['Networking',`VCN|كيف تنشئ شبكة خاصة بعناوين subnets؟|ما Virtual Cloud Network في OCI؟
Security List|كيف تضبط قواعد subnet ingress/egress؟|ما جدار قواعد على subnet؟
NSG|كيف تخصص قواعد لمجموعة VNICs؟|ما Network Security Group للموارد؟
NAT Gateway|VM خاصة تحتاج خروج Internet دون inbound عام. ما الخدمة؟|ما ترجمة عناوين للخروج؟
FastConnect|كيف تربط موقعًا بخط خاص إلى OCI؟|ما اتصال مخصص بدل Internet VPN؟`],
['Operations and Economics',`Monitoring|كيف تجمع metrics وتنشئ alarms؟|ما خدمة قياس تشغيل OCI؟
Logging|أين تحفظ سجلات موارد وتطبيقات؟|ما خدمة تجميع logs؟
Budgets|كيف تنبه عند قرب تخطي تكلفة محددة؟|ما حد إنفاق ومراقبته؟
Vault|كيف تحفظ أسرارًا ومفاتيح تشفير؟|ما مستودع مفاتيح OCI؟
Cloud Advisor|كيف تجد توصيات تكلفة وأمان وأداء؟|ما خدمة تحسين موارد OCI؟`]
]}
];
for(const bank of CLOUD_BANKS){
 const questions=[];
 if(bank.groups.length!==4)throw Error('Invalid domains '+bank.id);
 for(const [topic,raw] of bank.groups){
  const rows=raw.trim().split('\n').map(line=>line.split('|').map(v=>v.trim()));
  if(rows.length!==5||rows.some(r=>r.length!==3))throw Error('Invalid concepts '+bank.id+'/'+topic);
  rows.forEach(([correct,scenario,followup],i)=>{
   [scenario,followup].forEach((text,variant)=>{
    const offsets=variant?[1,3,4]:[1,2,3];
    const options=[correct,...offsets.map(offset=>rows[(i+offset)%5][0])];
    if(new Set(options).size!==4)throw Error('Duplicate options '+bank.id);
    questions.push({topic,text,options,answer:0,why:`${correct} هو المفهوم المناسب للحالة المذكورة ضمن محور ${topic}.`});
   });
  });
 }
 if(questions.length!==40||new Set(questions.map(q=>q.text)).size!==40)throw Error('Invalid questions '+bank.id);
 window.OMNITECH_EXAMS.push({id:bank.id,name:bank.name,track:'Diagnostic practice',minutes:bank.minutes,coverage:'20 مفهومًا بسيناريوهين لكل مفهوم',questions});
}
