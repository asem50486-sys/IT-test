// Educational diagnostics: 20 topics and two distinct prompts per topic, never official exam items.
const REMAINING_BANKS=[
{id:'ccde-400-007',name:'Cisco CCDE Written 400-007',minutes:120,groups:[
['Business and Requirements',`Stakeholder analysis|كيف تحدد أصحاب القرار ومتطلبات شبكة جديدة؟|ما جمع أهداف العمل والتعارضات قبل التصميم؟
Business constraint|ميزانية محدودة تمنع ازدواجية كاملة. ماذا توثق؟|ما قيد يؤثر على الخيارات التقنية؟
Acceptance criteria|كيف تثبت أن التصميم حقق هدف التوافر؟|ما مؤشرات قابلة للقياس قبل التنفيذ؟
Trade-off analysis|اختيار بين كلفة أقل وزمن تعافٍ أسرع. ما العملية؟|ما مقارنة بدائل التصميم على متطلبات العمل؟
Risk register|كيف تتبع أثر فشل رابط واحد وتخفيفه؟|ما سجل مخاطر وقرارات ومالكين؟`],
['Network Design',`Hierarchical design|كيف تقسّم core/distribution/access للتوسع؟|ما تصميم طبقات يحد نطاق الفشل؟
Address summarization|كيف تخفض عدد prefixes بين المناطق؟|ما تخطيط IP هرمي يسمح بتجميع المسارات؟
Routing domain|كيف تعزل تقارب BGP عن OSPF؟|ما حدود بين بروتوكولات وتوجيه مختلفة؟
Multicast design|كيف توزع بثًا لمجموعات متعددة بكفاءة؟|ما اختيار نموذج توجيه one-to-many؟
QoS design|كيف تضمن صوتًا مقبولًا عند ازدحام؟|ما تصنيف وجدولة وفق متطلبات تطبيق؟`],
['Resilience',`Failure domain|كيف تمنع عطل Layer 2 من التأثير على كل المواقع؟|ما تقسيم نطاق انتشار الخطأ؟
Diverse paths|كيف تحمي الموقع من انقطاع مزود واحد؟|ما وصلات ومسارات مستقلة فعليًا؟
Fast convergence|كيف تقلل فقد الحزم بعد سقوط core link؟|ما تصميم كشف فشل ومسار احتياطي؟
Capacity headroom|لماذا لا تصمم uplink عند 100% من متوسط الاستخدام؟|ما سعة احتياطية لنمو وذروة وفشل؟
DR design|موقع أساسي يتعطل. ما متطلبات النقل؟|ما RTO/RPO ومسار استعادة مخطط؟`],
['Technology and Validation',`SD-WAN|فروع كثيرة مع روابط متعددة تحتاج سياسة تطبيق. ما النمط؟|ما overlay يختار النقل وفق جودة؟
Segment routing|كيف تحدد مسارًا عبر قائمة segments؟|ما تصميم source routing داخل core؟
EVPN|كيف تتبادل MAC/IP في fabric؟|ما BGP control plane لخدمة Ethernet؟
Design validation|قبل التنفيذ، كيف تختبر سيناريو سقوط رابط؟|ما محاكاة أو pilot مقابل معايير قبول؟
Operational model|من يراقب ويصعّد تغيير السياسة بعد التسليم؟|ما خطة تشغيل وحوكمة تصميم الشبكة؟`]
]},
{id:'giac-gcfa',name:'GIAC GCFA',minutes:120,groups:[
['Acquisition',`Memory image|جهاز يعمل مع عملية خبيثة في RAM. ماذا تجمع أولًا؟|ما دليل متطاير قبل إيقاف التشغيل؟
Disk image|كيف تحتفظ بنسخة بتات للقرص؟|ما نسخة جنائية مع تحقق hash؟
Write blocker|كيف تمنع تغيير القرص الأصلي أثناء التصوير؟|ما حماية ضد الكتابة على الدليل؟
Chain of custody|انتقل الدليل بين محققين. ماذا توثق؟|ما سجل حيازة وتوقيت وتوقيع؟
Hash verification|كيف تثبت سلامة الصورة عبر النقل؟|ما مقارنة بصمة cryptographic؟`],
['Windows Artifacts',`Event logs|كيف تعرف دخولًا فاشلًا ونجاحًا في Windows؟|ما سجلات النظام والأمن؟
Registry run keys|كيف تبحث عن تشغيل تلقائي مشبوه؟|ما مفاتيح persistence عند الدخول؟
Prefetch|كيف تستدل على تنفيذ برنامج محلي؟|ما أثر Windows لتشغيل تطبيق؟
Amcache|كيف تبحث عن أثر برنامج سابق على القرص؟|ما قاعدة بيانات آثار تنفيذ وتثبيت؟
NTFS timestamps|كيف ترتب إنشاء وتعديل الملفات؟|ما MACB في metadata للملفات؟`],
['Analysis',`Process tree|كيف تربط Word ثم PowerShell ثم اتصال شبكة؟|ما تسلسل parent-child للعمليات؟
Timeline|أحداث من أجهزة مختلفة لا تتطابق. ما الإجراء؟|ما توحيد مناطق زمنية وترتيب الوقائع؟
Lateral movement|حساب يستخدم على خمسة خوادم بعد الاختراق. ما النمط؟|ما انتقال خصم بين مضيفات؟
Persistence|برمجية تعود بعد restart. ماذا تبحث؟|ما service/task/registry تضمن البقاء؟
Data staging|ملفات جمعت في أرشيف قبل خروجها. ما السلوك؟|ما تجهيز بيانات لعملية exfiltration؟`],
['Reporting',`Scope|عُثر IOC في جهاز. كيف تحد بقية المصابين؟|ما بحث مؤشرات عبر الأنظمة؟
Root cause|كيف تميز الدخول الأول من نشاط لاحق؟|ما تحليل vector الأولي وسبب الضعف؟
Evidence integrity|لماذا تعمل على نسخة؟|كيف تحافظ على الأصل دون تعديل؟
Incident narrative|كيف تشرح تسلسل الهجوم للإدارة؟|ما تقرير وقت وأصل وأثر ودليل؟
Remediation validation|بعد إزالة persistence، ماذا تختبر؟|ما إعادة فحص واستقرار endpoint؟`]
]},
{id:'giac-gcld',name:'GIAC GCLD',minutes:120,groups:[
['Cloud Foundations',`Shared responsibility|من يحمي بيانات العميل وإعداداته؟|ما تقسيم أدوار cloud provider والعميل؟
IAM least privilege|تطبيق يحتاج قراءة bucket فقط. ما الدور؟|ما تقليل أذونات workload؟
Multi-tenancy|كيف يفصل مزود السحابة عملاءه؟|ما عزل منطقي على بنية مشتركة؟
Cloud inventory|كيف تعرف الموارد المكشوفة عبر الحسابات؟|ما جرد متعدد البيئات؟
Landing zone|كيف تبدأ مؤسسة بحسابات وشبكات وضوابط معيارية؟|ما أساس سحابي موحد؟`],
['Preventive Controls',`MFA|كيف تقلل أثر سرقة كلمة مرور console؟|ما تحقق بعامل إضافي؟
Private endpoint|كيف تصل لخدمة PaaS دون Internet عام؟|ما واجهة خاصة داخل الشبكة؟
Encryption at rest|كيف تحمي ملفات مخزنة؟|ما تشفير بيانات ساكنة؟
Secret manager|أين تحفظ API token وتدوّره؟|ما خدمة إدارة أسرار؟
Policy as code|كيف تمنع bucket عامة في pipeline؟|ما قاعدة آلية قبل النشر؟`],
['Detection',`Audit logging|من غيّر firewall rule؟|ما سجل API activity؟
CSPM|كيف تكشف سوء تهيئة عبر حسابات؟|ما إدارة وضع أمن السحابة؟
Flow logs|كيف ترى مصدر واتجاه اتصال مشبوه؟|ما metadata حركة الشبكة؟
Threat detection|كيف تربط أحداث دخول وشبكة وworkload؟|ما كشف سلوك خطر متعدد المصادر؟
Drift detection|ما الذي يكشف انحراف config عن baseline؟|ما مقارنة موارد فعلية مع حالة مطلوبة؟`],
['Response',`Containment|حساب workload مسروق. ماذا تفعل؟|ما إبطال الجلسات وتقليل صلاحياته؟
Evidence preservation|قبل حذف VM مشتبه، ماذا تحفظ؟|ما snapshot وسجلات وتوقيت؟
Key rotation|انكشف token في repository. ما الإجراء؟|ما إبطال سر وإنشاء بديل؟
Recovery plan|منطقة سحابية تعطلت. كيف تعود؟|ما RTO/RPO واختبار انتقال؟
Lessons learned|بعد حادث تسرب، ما تحسين الضوابط؟|ما مراجعة سبب جذر ومنع تكرار؟`]
]},
{id:'giac-gpcs',name:'GIAC GPCS',minutes:120,groups:[
['Public Cloud Architecture',`Multi-account design|كيف تفصل إنتاجًا عن تطوير؟|ما حسابات مستقلة وسياسات حوكمة؟
Shared responsibility|من يدير وصول مستخدمي المؤسسة؟|ما حدود مسؤولية العميل والمزود؟
Network segmentation|كيف تمنع workload من الوصول لقاعدة حساسة؟|ما subnet وpolicy أقل امتياز؟
Private connectivity|مقر يحتاج وصلة خاصة للسحابة. ما الخيار؟|ما interconnect مخصص؟
Resilience|فشل availability zone. كيف يستمر التطبيق؟|ما توزيع متعدد المناطق وتكرار؟`],
['Identity and Data',`Workload identity|كيف تمنح تطبيقًا token مؤقتًا بدل مفتاح ثابت؟|ما هوية خدمة قصيرة العمر؟
Privileged access|كيف تمنع admin دائمًا لحسابات cloud؟|ما صلاحية عند الحاجة وموافقة؟
KMS|أين تدير مفاتيح تشفير؟|ما خدمة مفاتيح ودوران؟
DLP|كيف تحد نقل بيانات حساسة لخارج cloud؟|ما كشف ومنع تسرب معلومات؟
Data residency|لماذا تقيد Region تخزين معينة؟|ما شرط موقع البيانات؟`],
['Monitoring',`Cloud audit logs|من حذف bucket policy؟|ما تتبع API calls؟
CSPM|كيف تكشف public resource غير مقصود؟|ما تقييم تهيئة وامتثال مستمر؟
Threat intelligence|كيف تثري IP في finding؟|ما مصدر سمعة وسياق؟
Container runtime detection|كيف تكشف shell مشبوهة داخل container؟|ما مراقبة سلوك أحمال التشغيل؟
SIEM correlation|كيف تربط حسابًا وجهازًا وnetwork flow؟|ما تحليل سجلات متعدد المصادر؟`],
['Operations',`IaC review|كيف تكتشف ثغرة قبل apply؟|ما فحص قالب وتغيير وموافقة؟
Incident playbook|كيف تعزل instance مصابة دون فقد الأدلة؟|ما استجابة موثقة مع snapshots؟
Backup test|كيف تثبت قابلية استعادة قاعدة؟|ما restore معزول دوري؟
Cost anomaly|نشاط تعدين يرفع الفاتورة. ما مؤشر؟|ما تنبيه تكلفة شاذة؟
Exit strategy|كيف تنقل بياناتك لمزود آخر؟|ما خطة قابلية نقل وتوافق؟`]
]},
{id:'giac-gcfr',name:'GIAC GCFR',minutes:120,groups:[
['Cloud Evidence',`Audit API logs|كيف تعرف من أنشأ resource مشتبه؟|ما سجلات control plane؟
Snapshot|قبل حذف VM، كيف تحفظ قرصها؟|ما صورة block storage للتحقيق؟
Object versioning|ملف حذف من bucket. كيف تستعيد أثره؟|ما نسخ object السابقة؟
Memory capture|عملية خبيثة تعمل الآن. ما دليل متطاير؟|ما RAM image قبل الإيقاف؟
Chain of custody|كيف توثق انتقال exports للتحليل؟|ما سجل حيازة وبصمات؟`],
['Multi-cloud',`AWS CloudTrail|أين ترى AWS management events؟|ما سجل API في AWS؟
Azure Activity Log|أين تبحث عن تغيير مورد Azure؟|ما سجل control plane للاشتراك؟
Google Cloud Audit Logs|من غيّر IAM في مشروع؟|ما audit log في Google Cloud؟
Identity federation|كيف تربط حساب مستخدم عبر موفر هوية؟|ما سجلات SSO الخارجية؟
Time normalization|كيف تدمج أحداث ثلاثة مزودين؟|ما تحويل UTC وتوحيد الطوابع؟`],
['Incident Investigation',`Scope expansion|IOC في instance واحدة. ماذا تبحث؟|ما query عبر حسابات ومناطق أخرى؟
Credential compromise|token ظهر في source عام. ما الاشتباه؟|ما استخدام سر مسروق في APIs؟
Lateral movement|هوية تنتقل بين حسابات cloud. ما السلوك؟|ما AssumeRole أو صلاحيات عابرة للحسابات؟
Exfiltration|خروج بيانات كبير من object store. ما الفحص؟|ما logs طلبات تنزيل ووجهات؟
Persistence|مورد automation يعيد إنشاء حساب بعد الحذف. ماذا تفحص؟|ما scheduled functions وroles باقية؟`],
['Response and Reporting',`Containment|هوية مخترقة تشغل موارد. ما الحد؟|ما إبطال جلسات وتقليل صلاحيات؟
Evidence retention|logs قصيرة الاحتفاظ. ماذا تفعل؟|ما تصدير وحماية قبل انتهاء المدة؟
Root cause|كيف تحد نقطة دخول أولى في عدة cloud accounts؟|ما تسلسل المصادقة والـAPI؟
Recovery|كيف تعود لتهيئة موثوقة؟|ما نشر IaC نظيف ومراقب؟
Report|كيف تثبت أثر الحادث عبر المزودين؟|ما خط زمني وأصول وبيانات ودليل؟`]
]},
{id:'isaca-cism',name:'ISACA CISM',minutes:120,groups:[
['Governance',`Security strategy|كيف تربط برنامج الأمن بأهداف المؤسسة؟|ما خطة تعتمد المخاطر وأولويات الأعمال؟
Policy approval|من يعتمد سياسة أمن عليا؟|ما مسؤولية الإدارة والحوكمة؟
Roles|كيف تحد مسؤولية owner وcustodian؟|ما توزيع صلاحيات الأمن والبيانات؟
Metrics|كيف تقيس نضج برنامج أمني؟|ما مؤشرات فاعلية مقابل أهداف؟
Budget prioritization|موارد محدودة ومخاطر عديدة. ماذا تفعل؟|ما تخصيص ضوابط حسب أثر الخطر؟`],
['Risk Management',`Risk appetite|ما المستوى الذي تقبله الإدارة؟|ما حد تحمل المؤسسة؟
Risk assessment|كيف تجمع احتمال وأثر حادثة؟|ما تقييم خطر للأصول؟
Risk treatment|ثغرة لا يمكن إصلاحها. ما الخيارات؟|ما تخفيف أو قبول أو نقل أو تجنب؟
Third-party risk|مورد يعالج بيانات حساسة. ما الإجراء؟|ما تقييم ومراقبة طرف ثالث؟
Residual risk|بعد الضوابط، ما الذي يبقى؟|ما خطر متبقٍ يحتاج قرارًا؟`],
['Security Program',`Control roadmap|كيف تحد ترتيب تنفيذ ضوابط جديدة؟|ما خطة زمنية ومالكين وقياس؟
Awareness|كيف تقلل نقر روابط تصيد؟|ما تدريب وتوعية مستهدفة؟
Architecture review|مشروع جديد قبل النشر. ماذا تراجع؟|ما تصميم ضوابط مقابل متطلبات؟
Continuous monitoring|كيف تكتشف انحرافًا عن سياسة؟|ما قياس دوري للحالة؟
Program reporting|كيف تعرض فائدة الاستثمار للإدارة؟|ما أثر أعمال ومخاطر متبقية؟`],
['Incident Management',`Incident plan|كيف تحد أدوار التصعيد والقرار؟|ما خطة استجابة معتمدة؟
Containment decision|خادم حرج مصاب. من يوازن أثر فصله؟|ما قرار حادثة تشاركي؟
Communication|متى تبلغ أصحاب المصلحة؟|ما قناة وتوقيت وحقائق مؤكدة؟
Forensic preservation|ما المطلوب قبل تنظيف جهاز؟|ما حماية أدلة وسلسلة حيازة؟
Lessons learned|كيف تطور البرنامج بعد هجوم؟|ما تحليل سبب جذر وتصحيح؟`]
]},
{id:'isaca-cisa',name:'ISACA CISA',minutes:120,groups:[
['Audit Process',`Audit charter|ما الذي يمنح وظيفة التدقيق تفويضًا واستقلالًا؟|ما وثيقة نطاق وسلطة التدقيق؟
Risk-based plan|كيف تختار أنظمة تراجع أولًا؟|ما تخطيط تدقيق حسب أثر واحتمال؟
Audit evidence|كيف تدعم finding قابلة للمراجعة؟|ما أدلة كافية وموثوقة وذات صلة؟
Sampling|لا يمكن فحص كل المعاملات. ما النهج؟|ما اختيار عينة ممثلة؟
Independence|مدقق صمم الضابط ثم راجعه بنفسه. ما الخطر؟|ما تضارب موضوعية التدقيق؟`],
['Governance and IT',`IT governance|كيف تربط خدمات تقنية بأهداف العمل؟|ما رقابة القيادة على التقنية؟
Change management|كيف تثبت موافقة واختبار تغيير إنتاج؟|ما سجلات طلب وتفويض وتنفيذ؟
Vendor oversight|خدمة مستضافة عند مورد. ما التحقق؟|ما SLA وضوابط وتقارير طرف ثالث؟
Segregation of duties|موظف ينشئ موردًا ويوافق عليه. ما الخلل؟|ما فصل صلاحيات متعارضة؟
Policy compliance|كيف تتحقق من التزام إعدادات بمعيار؟|ما مقارنة ضابط موثق بحالة فعلية؟`],
['Acquisition and Operations',`SDLC review|كيف تتحقق أن متطلبات أمن ضمن مشروع؟|ما مراجعة مراحل تطوير ونشر؟
Access recertification|كيف تكتشف صلاحيات موظفين غادروا؟|ما مراجعة دورية للوصول؟
Backup testing|كيف تثبت نجاح خطة الاستعادة؟|ما restore فعلي موثق؟
Incident logs|كيف تتحقق من اكتشاف وتصعيد حادث؟|ما تتبع زمن قرار وأدلة؟
Configuration baseline|كيف ترصد انحراف خادم؟|ما معيار وضبط ومقارنة؟`],
['Protection',`Encryption controls|كيف تتحقق من حماية بيانات ساكنة؟|ما إدارة مفاتيح وفصل صلاحيات؟
Network segmentation|كيف تراجع عزل أنظمة حساسة؟|ما فحص قواعد وحدود اتصال؟
Physical security|كيف تثبت دخول مراكز البيانات مخولًا؟|ما سجلات بطاقات وكاميرات؟
BCP exercise|هل خطة الاستمرارية تعمل؟|ما اختبار سيناريو انقطاع؟
Remediation tracking|بعد finding، كيف تتأكد من علاجها؟|ما خطة تصحيح وموعد وإعادة فحص؟`]
]},
{id:'isaca-crisc',name:'ISACA CRISC',minutes:120,groups:[
['Governance',`Risk appetite|ما الحد الذي تقبله المؤسسة؟|ما مستوى خطر اعتمدته الإدارة؟
Risk ownership|من يقرر معالجة خطر متعلق بخدمة؟|ما مسؤول أثر العمل؟
Risk taxonomy|كيف توحد وصف مخاطر عدة فرق؟|ما تصنيف موحد للمخاطر؟
Strategic alignment|كيف تربط خطر تقني بهدف عمل؟|ما ترجمة تأثير التقنية إلى قرار؟
Risk culture|كيف تشجع الإبلاغ المبكر عن ضعف؟|ما سلوك مؤسسي يدعم إدارة المخاطر؟`],
['Assessment',`Threat scenario|كيف تصف مهاجمًا يستغل خدمة عامة؟|ما حدث يربط تهديدًا وضعفًا وأثرًا؟
Likelihood|ما احتمال وقوع سيناريو؟|ما تقدير فرصة تحقق الخطر؟
Impact|ما خسارة توقف عملية مالية؟|ما أثر مالي وتشغيلي وقانوني؟
Inherent risk|ما الخطر قبل تطبيق الضوابط؟|ما مستوى تعرض أصلي؟
Residual risk|ما الخطر بعد العلاج؟|ما مستوى باقٍ يحتاج قبولًا؟`],
['Response',`Risk mitigation|كيف تقلل احتمال استغلال ثغرة؟|ما تطبيق ضابط يخفف الخطر؟
Risk transfer|كيف تنقل جزءًا من الأثر بعقد أو تأمين؟|ما مشاركة تبعات مالية مع طرف؟
Risk acceptance|متى تترك خطرًا موثقًا دون علاج إضافي؟|ما موافقة صاحب الصلاحية؟
Control selection|كيف تختار ضابطًا فعالًا ومتناسبًا؟|ما مقارنة كلفة وأثر تغطية؟
Action plan|كيف تتبع عيوب لم تغلق؟|ما مالك وموعد وإجراء لكل خطر؟`],
['Monitoring',`KRI|كيف تتلقى إنذارًا بزيادة احتمال خطر؟|ما مؤشر مخاطر رئيسي؟
KCI|كيف تراقب فاعلية ضابط؟|ما مؤشر تحكم رئيسي؟
KPI|كيف تقيس أداء برنامج الاستجابة؟|ما مؤشر أداء هدف تشغيلي؟
Risk register|أين تحفظ حالة مخاطر وقراراتها؟|ما سجل موحد للمخاطر؟
Continuous review|بيئة الأعمال تغيرت. ماذا تفعل للتقييم؟|ما إعادة تقييم دوري عند تغييرات مهمة؟`]
]},
{id:'csa-ccsk',name:'Cloud Security Alliance CCSK',minutes:90,groups:[
['Cloud Governance',`Shared responsibility|من يضبط صلاحيات البيانات في السحابة؟|ما حدود مسؤولية مزود ومستخدم؟
Cloud service model|تطبيق جاهز أم VM أم منصة؟ ما التصنيف؟|ما SaaS/PaaS/IaaS؟
Risk assessment|كيف تختار مزودًا يحقق قيود بيانات؟|ما تقييم مخاطر ومتطلبات؟
Contract SLA|ما وثيقة توافر وخدمة دعم؟|ما اتفاق مستوى خدمة؟
Exit strategy|كيف تنقل workload لمزود آخر؟|ما قابلية نقل وخطة خروج؟`],
['Identity and Data',`IAM federation|كيف يدخل موظف عبر هوية الشركة؟|ما اتحاد حسابات بين المؤسسة والسحابة؟
Least privilege|تطبيق يحتاج bucket واحدة. ما أذوناته؟|ما أقل وصول لازم؟
Encryption at rest|كيف تحمي objects المخزنة؟|ما تشفير بيانات ساكنة؟
Key management|من يدير مفاتيح تشفير البيانات؟|ما دورة وتدوير وفصل صلاحيات؟
Data residency|ما الذي يقيد Region بيانات العملاء؟|ما شرط موقع وتدفق بيانات؟`],
['Infrastructure and App',`Virtualization isolation|كيف تفصل VMs لعملاء مختلفين؟|ما عزل hypervisor والمستأجر؟
Container security|كيف تحد امتياز container؟|ما سياسات runtime وصور موثوقة؟
Private connectivity|كيف تصل لخدمة دون إنترنت عام؟|ما endpoint خاص؟
API security|كيف تمنع abuse لواجهة عامة؟|ما مصادقة وتفويض ومعدل؟
DevSecOps|كيف تدخل فحص أسرار في pipeline؟|ما أمن ضمن دورة تطوير مستمرة؟`],
['Monitoring and Response',`Audit logs|من غيّر policy عامة؟|ما سجل نشاط API؟
CSPM|كيف تكشف bucket مكشوفة بين حسابات؟|ما مراقبة وضع أمن السحابة؟
Incident playbook|كيف تستجيب لتسرب مفتاح؟|ما عزل وتدوير وتوثيق؟
BCP|كيف تحافظ على الخدمة عند فشل منطقة؟|ما خطة استمرارية واختبار؟
Compliance evidence|كيف تثبت ضوابط مزود لمراجع؟|ما تقارير واختبارات موثقة؟`]
]},
{id:'hcia-datacom',name:'Huawei HCIA-Datacom',minutes:90,groups:[
['Networking',`OSI model|كيف تفصل أدوار طبقات الاتصال؟|ما نموذج سبع طبقات للشبكة؟
Subnet mask|كيف تعرف جزء الشبكة من عنوان IPv4؟|ما /24 أو قناع يحدد prefix؟
Default gateway|كيف يخرج جهاز إلى شبكة أخرى؟|ما next hop المحلي للعميل؟
ARP|كيف تحل IPv4 إلى MAC داخل LAN؟|ما بروتوكول اكتشاف عنوان الطبقة الثانية؟
DNS|كيف تحول اسم موقع إلى عنوان IP؟|ما خدمة حل الأسماء؟`],
['Switching',`VLAN|كيف تفصل broadcast domains على سويتش؟|ما معرف شبكة Layer 2 افتراضية؟
Access port|كيف توصل جهاز مستخدم بـVLAN واحدة؟|ما منفذ يرسل إطارات غير موسومة؟
Trunk port|كيف تنقل عدة VLANs بين سويتشين؟|ما منفذ 802.1Q متعدد الشبكات؟
STP|كيف تمنع loop بين وصلات Layer 2؟|ما بروتوكول شجرة ممتدة؟
LACP|كيف تجمع وصلتين في رابط منطقي؟|ما تفاوض تجميع منافذ؟`],
['Routing',`Static route|كيف تضيف مسارًا يدويًا لشبكة بعيدة؟|ما route بعنوان next-hop محدد؟
OSPF|كيف تتبادل routes ديناميكيًا داخل مؤسسة؟|ما link-state IGP شائع؟
Route preference|كيف يختار الجهاز بين مسارات مختلفة؟|ما أولوية مصدر route في VRP؟
IPv6|ما عائلة عناوين بديلة لـIPv4؟|ما عناوين 128-bit؟
NAT|كيف تسمح لعناوين خاصة بالخروج إلى الإنترنت؟|ما ترجمة عناوين ومنافذ؟`],
['Operations',`VRP CLI|كيف تدخل وضع إعداد Huawei؟|ما system-view لتعديل التهيئة؟
Display commands|كيف تراجع حالة interfaces وrouting؟|ما أوامر display في VRP؟
DHCP|كيف يحصل جهاز على IP تلقائيًا؟|ما خدمة توزيع عناوين؟
ACL|كيف تمنع مصدرًا من الوصول لوجهة؟|ما قاعدة مطابقة traffic؟
Ping|كيف تختبر وصول IP مبدئيًا؟|ما طلب ICMP echo؟`]
]},
{id:'hcip-datacom',name:'Huawei HCIP-Datacom',minutes:120,groups:[
['Advanced Routing',`OSPF area design|كيف تقلل LSDB في شبكة كبيرة؟|ما تقسيم مناطق OSPF؟
BGP|كيف تربط AS المؤسسة بمزود؟|ما بروتوكول inter-domain؟
Route policy|كيف تتحكم في إعلان prefixes؟|ما شروط import/export للـroutes؟
IS-IS|ما link-state IGP بمستويات L1/L2؟|ما بديل OSPF في core؟
BFD|كيف تسرع كشف فقد forwarding؟|ما جلسة مراقبة سريعة؟`],
['Campus',`MSTP|كيف توزع VLANs على instances شجرة مختلفة؟|ما Multiple Spanning Tree؟
Eth-Trunk|كيف تجمع وصلات سويتشات Huawei؟|ما واجهة منطقية لأعضاء Ethernet؟
VRRP|كيف توفر بوابة افتراضية احتياطية؟|ما بروتوكول default gateway redundancy؟
802.1X|كيف تصادق جهازًا قبل وصول LAN؟|ما تحكم منفذ بواسطة AAA؟
QoS|كيف تعطي صوتًا أولوية عند ازدحام؟|ما تصنيف وطوابير traffic؟`],
['WAN and Services',`MPLS|كيف تمرر الحزم وفق labels داخل core؟|ما تقنية label switching؟
L3VPN|كيف تفصل عملاء في VRFs؟|ما خدمة VPN طبقة ثالثة؟
IPsec|كيف تربط فرعين عبر Internet بتشفير؟|ما نفق آمن بين المواقع؟
Multicast|كيف توصل stream واحدًا لمجموعة مستلمين؟|ما توزيع one-to-many؟
NAT|كيف تنشر خادم خاص بعنوان عام؟|ما ترجمة وجهة أو مصدر؟`],
['Automation and Troubleshooting',`NETCONF|كيف تعدل تهيئة مهيكلة عبر RPC؟|ما بروتوكول إدارة XML/YANG؟
Telemetry|كيف تبث counters مستمرة للمراقبة؟|ما جمع قياسات لحظية؟
Configuration backup|قبل تغيير واسع، ماذا تحفظ؟|ما نسخة إعدادات قابلة للرجوع؟
Packet capture|كيف تراجع TCP handshake عند فشل تطبيق؟|ما تحليل حزم؟
Log correlation|كيف تجمع أحداث أجهزة متعددة؟|ما ربط syslog وطابع زمني موحد؟`]
]},
{id:'hcie-datacom',name:'Huawei HCIE-Datacom Written Diagnostic',minutes:120,groups:[
['Architecture',`Hierarchical design|كيف تفصل campus core/distribution/access؟|ما تصميم طبقات للتوسع؟
Failure domain|كيف تمنع loop من تعطيل كل المؤسسة؟|ما عزل نطاق الفشل؟
Address summarization|كيف تقلل جدول التوجيه في الحدود؟|ما خطة عناوين هرمية؟
Dual-homing|كيف تصل موقعًا عبر مزودين مستقلين؟|ما تنوع مسارات للوصول؟
Capacity planning|كيف تستوعب ذروة بعد فشل uplink؟|ما هامش سعة وتصميم redundancy؟`],
['Routing',`BGP policy|كيف تفضل خروج AS دون التأثير في كل المسارات؟|ما local preference وسياسات import؟
OSPF convergence|كيف تقلل فقد الحزم عند سقوط رابط؟|ما ضبط كشف الفشل ومسارات بديلة؟
MPLS L3VPN|كيف تعزل شبكات عملاء على provider PE؟|ما VRFs وlabels للخدمة؟
Route redistribution|كيف تمنع loop بين OSPF وBGP؟|ما tags وحدود إعادة الإعلان؟
Segment routing|كيف تختار مسارًا عبر SIDs؟|ما source routing في core؟`],
['Security and Services',`Microsegmentation|كيف تحد lateral movement؟|ما سياسات دقيقة بين workloads؟
IPsec|كيف تحمي مرور WAN غير موثوق؟|ما تشفير tunnel؟
QoS SLA|كيف تضمن jitter منخفضًا للصوت؟|ما قياس وتصنيف وجدولة؟
AAA|كيف تدير حسابات مسؤولي الأجهزة؟|ما مصادقة وتفويض وتدقيق؟
Multicast design|كيف تبث فيديو لمستلمين كثيرين بكفاءة؟|ما شجرة توزيع one-to-many؟`],
['Validation',`Failure test|كيف تثبت استمرار الخدمة عند سقوط core؟|ما تجربة failover محددة؟
Telemetry baseline|كيف تميز تدهورًا بعد التغيير؟|ما قياسات قبل/بعد متزامنة؟
Rollback plan|كيف تعود إذا فشل تغيير BGP؟|ما نسخة وcommit وخط رجوع؟
Root cause analysis|عدة تطبيقات تتوقف معًا. ما المنهج؟|ما ربط أعراض وسبب مشترك؟
Design acceptance|متى تعتمد التصميم؟|ما معايير توافر وأداء وأمن قابلة للقياس؟`]
]},
{id:'hcia-security',name:'Huawei HCIA-Security',minutes:90,groups:[
['Fundamentals',`CIA triad|كيف تصنف السرية والسلامة والتوافر؟|ما مبادئ أمن المعلومات الأساسية؟
Threat|ما مصدر محتمل لضرر أصل؟|ما فاعل أو حدث يمكنه الاستغلال؟
Vulnerability|ما ضعف في تهيئة خدمة؟|ما قابلية يمكن أن تستغل؟
Risk|كيف تربط احتمال التهديد بأثره؟|ما تقدير الخطر؟
Defense in depth|كيف تقلل أثر فشل ضابط واحد؟|ما طبقات حماية متعددة؟`],
['Firewall',`Security zone|كيف تفصل LAN وWAN في الجدار؟|ما نطاق ثقة للواجهة؟
Security policy|كيف تسمح HTTPS من شبكة معينة؟|ما قاعدة مصدر ووجهة وخدمة؟
NAT|كيف تترجم عناوين خاصة للإنترنت؟|ما تحويل IP/port؟
Stateful inspection|كيف يسمح الجدار برد جلسة منشأة؟|ما تتبع connection state؟
Log analysis|كيف تعرف سبب drop؟|ما سجل قرار وقاعدة مطابقة؟`],
['VPN and Identity',`IPsec|كيف تشفر اتصال فرعين؟|ما بروتوكول نفق آمن؟
IKE|كيف تتفاوض الأطراف على مفاتيح VPN؟|ما مرحلة تأسيس SA؟
AAA|كيف تضبط دخول إداريين للجدار؟|ما مصادقة وتفويض ومحاسبة؟
MFA|كيف تحمي دخول بعيد من سرقة كلمة؟|ما عامل ثانٍ؟
Least privilege|ما صلاحية حساب تشغيل؟|ما أقل حقوق مطلوبة؟`],
['Threat Defense',`IPS|كيف توقف استغلال معروف أثناء المرور؟|ما كشف ومنع intrusion؟
Antivirus|كيف تفحص ملفًا ضارًا معروفًا؟|ما مكافحة برمجيات خبيثة؟
URL filtering|كيف تمنع فئة مواقع غير مصرح بها؟|ما تصنيف وصول الويب؟
Patch management|كيف تغلق ثغرات معروفة؟|ما تحديث منظم ومختبر؟
Backup|كيف تستعيد سياسة جدار بعد خطأ؟|ما نسخة إعدادات موثوقة؟`]
]},
{id:'hcip-security',name:'Huawei HCIP-Security',minutes:120,groups:[
['Firewall Architecture',`High availability|كيف تستمر الخدمة عند سقوط جدار؟|ما زوج active/standby؟
Session synchronization|لماذا تنقطع جلسات عند failover؟|ما نقل حالة الاتصال للشريك؟
Security zones|كيف تفصل trust/untrust/DMZ؟|ما تقسيم واجهات حسب الثقة؟
Policy ordering|قاعدة سماح لا تعمل بسبب منع سابق. لماذا؟|ما أول تطابق في السياسة؟
Route symmetry|جدار stateful يرى اتجاهًا واحدًا. ما الخلل؟|ما ضرورة مسار ذهاب وعودة متسق؟`],
['VPN',`IPsec site-to-site|كيف تشفر بيانات فرعين؟|ما tunnel مشفر؟
IKE peer identity|تفاوض VPN يفشل رغم الوصول. ماذا تراجع؟|ما تطابق هوية وشهادة أو سر الطرف؟
VPN routing|نفق up بلا مرور. ما تفحص؟|ما routes وselectors وACL؟
Remote access VPN|كيف تمنح مستخدمًا خارج المكتب وصولًا محدودًا؟|ما وصول مشفر بهوية وسياسة؟
Certificate validation|كيف تمنع اتصال peer منتحل؟|ما تحقق CA وسلسلة ثقة؟`],
['Threat Management',`IPS policy|كيف تطبق توقيعات هجوم وفق مناطق؟|ما قواعد منع استغلال؟
URL filtering|كيف تضبط فئات تصفح؟|ما سياسة ويب مبنية على التصنيف؟
Sandbox|كيف تحلل ملفًا مجهولًا في بيئة معزولة؟|ما تحليل ديناميكي للمرفقات؟
DNS security|كيف تمنع نطاق C2 عند الحل؟|ما تصفية أسماء خبيثة؟
Decryption policy|لماذا يؤثر TLS inspection على تطبيق؟|ما شهادة وثقة واستثناء دقيق؟`],
['Operations',`Central management|كيف تنشر سياسة على عدة جدران؟|ما إدارة موحدة للتغيير؟
Log correlation|كيف تربط drop بنشاط malware؟|ما سجلات firewall وIPS متزامنة؟
Capacity planning|CPU ترتفع بعد IPS. ماذا تقيس؟|ما حجم مرور وسعة الفحص؟
Configuration backup|ما خطوة قبل تحديث firmware؟|ما حفظ إعداد وخطة رجوع؟
Post-change validation|كيف تثبت نجاح قاعدة جديدة؟|ما اختبار مرور مسموح ومحظور؟`]
]},
{id:'hcie-security',name:'Huawei HCIE-Security Written Diagnostic',minutes:120,groups:[
['Security Design',`Zero trust|هل يكفي موقع المستخدم داخل LAN للثقة؟|ما تحقق سياقي لكل طلب؟
Microsegmentation|كيف تمنع انتقال خصم بين خوادم؟|ما سياسة شرق وغرب دقيقة؟
Defense in depth|ما تصميم يقلل أثر فشل firewall؟|ما ضوابط متعددة مستقلة؟
Threat modeling|كيف تحد حدود الثقة قبل بناء خدمة؟|ما تحليل أصول ومسارات هجوم؟
Resilience|كيف تتجنب نقطة فشل جدار أو هوية؟|ما ازدواج مكونات واختبار انتقال؟`],
['Advanced Firewall',`Policy shadowing|قاعدة لا ترى hit بسبب قاعدة أسبق. ما المشكلة؟|ما قواعد متداخلة تلغي أثر لاحقة؟
Asymmetric flow|جدار stateful يسقط الرد. لماذا؟|ما اختلاف مسار الاتجاهين؟
NAT design|كيف تنشر خدمة خاصة وتحتفظ برؤية المصدر؟|ما ترجمة محسوبة وتوثيق؟
SSL inspection|كيف تفحص تهديدات ويب مع حماية خصوصية؟|ما سياسة فك تشفير واستثناء مدروس؟
HA sync|كيف تحافظ على جلسات أثناء failover؟|ما مزامنة الحالة بين الأعضاء؟`],
['Identity and Threat',`AAA federation|كيف تربط صلاحيات مسؤولين بهوية مركزية؟|ما مصادقة وتفويض متعددة الأجهزة؟
SIEM integration|كيف تكتشف حملة عبر مصادر firewall وendpoint؟|ما ربط أحداث مركزي؟
IPS tuning|توقيع يمنع تطبيقًا شرعيًا. ماذا تفعل؟|ما تحقق وضبط دقيق دون تعطيل عام؟
DLP|كيف تقلل خروج ملف حساس؟|ما منع تسرب حسب المحتوى؟
SOAR playbook|كيف تنسق احتواء IOC متكرر؟|ما استجابة آلية بموافقة وتدقيق؟`],
['Validation',`Attack simulation|كيف تثبت أن سياسة تمنع سيناريو معروفًا؟|ما اختبار دفاع مخول؟
Failure drill|كيف تختبر سقوط عضو جدار؟|ما تجربة failover بقياس انقطاع؟
RTO/RPO|كيف تخطط لاستعادة الإدارة بعد كارثة؟|ما حدود توقف وفقد بيانات؟
Root cause|عدة خدمات تتعطل بعد policy واحدة. ما المنهج؟|ما تحليل تأثير وتبعية السياسة؟
Rollback|كيف ترجع تغييرًا فاشلًا بأمان؟|ما نسخة وسياسة وإجراء موثق؟`]
]},
{id:'hcia-cloud',name:'Huawei HCIA-Cloud Computing',minutes:90,groups:[
['Cloud Basics',`IaaS|عميل يدير نظام تشغيل VM. ما نموذج الخدمة؟|ما بنية افتراضية مستضافة؟
PaaS|مطور ينشر تطبيقًا دون إدارة OS. ما النموذج؟|ما runtime مُدار؟
SaaS|مستخدم يستعمل برنامج بريد جاهز. ما النموذج؟|ما تطبيق سحابي مُدار؟
Virtualization|كيف يشغل خادم فيزيائي عدة VMs؟|ما فصل موارد عتاد افتراضية؟
Hypervisor|ما البرنامج الذي يدير الآلات الافتراضية؟|ما طبقة تحكم بين hardware وVMs؟`],
['Compute',`VM|كيف تمنح نظامًا ضيفًا موارد CPU/RAM؟|ما آلة افتراضية تعمل على host؟
Image|كيف تنشئ نسخ VMs موحدة؟|ما قالب OS مُعد مسبقًا؟
Snapshot|قبل تحديث تطبيق، ما نقطة رجوع سريعة؟|ما لقطة حالة VM؟
Live migration|كيف تنقل VM بين hosts بأقل توقف؟|ما انتقال workload أثناء العمل؟
Resource pool|كيف تخصص CPU/Memory لمجموعة VMs؟|ما تجميع موارد مضيفين؟`],
['Network Storage',`Virtual switch|كيف تتصل VMs على نفس المضيف؟|ما سويتش برمجي للواجهات؟
VLAN|كيف تفصل شبكات VMs؟|ما broadcast domain افتراضي؟
Block storage|ما قرص دائم لـVM؟|ما تخزين كتلي للأنظمة؟
Object storage|أين تحفظ ملفات غير مهيكلة؟|ما buckets لأجسام البيانات؟
Load balancer|كيف توزع طلبات بين VMs؟|ما موزع مع health check؟`],
['Operations',`High availability|كيف تبدأ VM على مضيف بديل بعد فشل host؟|ما آلية توافر للـcluster؟
Backup|كيف تستعيد بيانات بعد حذف؟|ما نسخة احتياطية منفصلة؟
Monitoring|كيف ترى CPU وstorage وتصدر إنذارًا؟|ما مقاييس تشغيل؟
IAM|كيف تمنح فنيًا إدارة مشروع واحد؟|ما هوية وصلاحيات محدودة؟
Capacity planning|كيف تتجنب نفاد RAM مع نمو VMs؟|ما تقدير موارد وهامش توسع؟`]
]},
{id:'hcip-cloud',name:'Huawei HCIP-Cloud Computing',minutes:120,groups:[
['Virtual Infrastructure',`Compute cluster|كيف تجمع hosts للتوافر والتوسع؟|ما مجموعة مضيفين للموارد؟
Live migration|كيف تنقل VM أثناء صيانة host؟|ما نقل دون توقف كبير؟
HA restart|مضيف فشل، كيف تعيد VMs؟|ما تشغيل تلقائي على host آخر؟
Overcommit|تخصيص vCPU فوق cores المتاحة. ما الخطر؟|ما ازدحام موارد تحت الذروة؟
NUMA awareness|VM كبيرة بطيئة رغم CPU متاح. ما عامل؟|ما قرب ذاكرة ومعالج في host؟`],
['Storage',`Shared storage|لماذا تحتاج وصول عدة hosts لقرص VM؟|ما مخزن مشترك للهجرة وHA؟
Thin provisioning|كيف تخصص سعة منطقية أكبر من المستخدمة فعليًا؟|ما تخصيص storage عند الكتابة؟
Storage multipathing|مسار SAN سقط. كيف تستمر I/O؟|ما مسارات HBA/شبكة بديلة؟
Snapshot policy|لقطات كثيرة تستهلك التخزين. ماذا تفعل؟|ما حد احتفاظ وتنظيف منظم؟
Backup restore|كيف تثبت صلاحية النسخ؟|ما اختبار استعادة مستقل؟`],
['Networking',`Virtual switch|كيف تربط vNICs بالـuplinks؟|ما تحويل Layer 2 افتراضي؟
VLAN trunk|كيف تمرر عدة شبكات إلى المضيف؟|ما 802.1Q على uplink؟
Distributed switch|كيف توحد سياسة منافذ عبر hosts؟|ما إدارة شبكة افتراضية مركزية؟
Network bonding|كيف تضيف توافر uplinks للمضيف؟|ما تجميع أو failover NICs؟
Security groups|كيف تقيد اتصال VM بVM؟|ما قواعد firewall افتراضي؟`],
['Operations',`Resource scheduling|كيف توازن أحمال VMs بين hosts؟|ما placement حسب السعة؟
Monitoring baseline|كيف تكشف latency تخزين غير معتاد؟|ما مقارنة قياسات مع وضع طبيعي؟
Patch maintenance|كيف تحدث hosts دون إسقاط كل VMs؟|ما هجرة وتحديث تدريجي؟
Failure drill|كيف تثبت HA تعمل؟|ما اختبار سقوط مضيف في مختبر؟
Change rollback|كيف تتراجع عن سياسة شبكة خاطئة؟|ما نسخة وإجراء عودة؟`]
]},
{id:'hcie-cloud',name:'Huawei HCIE-Cloud Computing Written Diagnostic',minutes:120,groups:[
['Architecture',`Multi-site design|كيف تتحمل فقد مركز بيانات كامل؟|ما توزيع خدمة بين موقعين؟
Failure domain|كيف تمنع عطل storage واحد من إسقاط كل الأحمال؟|ما فصل موارد وخدمات حرجة؟
Capacity model|كيف تخطط نمو VMs لمدة عامين؟|ما CPU/RAM/IOPS وهامش فشل؟
Hybrid integration|كيف تربط private cloud بخدمات public؟|ما هوية وشبكة وبيانات متكاملة؟
RTO/RPO|كيف تحول متطلبات تعافي إلى بنية؟|ما حد زمن وفقد بيانات؟`],
['Compute and Storage',`NUMA placement|كيف تحسن VM كبيرة كثيرة الذاكرة؟|ما وضع vCPU/RAM ضمن عقد NUMA؟
Live migration|كيف تصون مضيفًا بلا توقف ملحوظ؟|ما نقل VM بين hosts؟
Storage replication|كيف تحمي LUN من فقد موقع؟|ما نسخ بيانات بين مصفوفتين؟
QoS storage|حمل واحد يخنق بقية VMs. ما الضابط؟|ما تحديد IOPS حسب workload؟
Backup isolation|كيف تمنع ransomware من حذف كل النسخ؟|ما نسخة منفصلة بامتيازات مختلفة؟`],
['Network and Security',`Microsegmentation|كيف تقلل lateral movement بين VMs؟|ما قواعد شرق وغرب؟
Overlay network|كيف تفصل tenant فوق IP fabric؟|ما أنفاق افتراضية للاتصال؟
Load balancing|كيف تحمي خدمة من فشل backend؟|ما توزيع طلبات مع health checks؟
IAM federation|كيف توحد دخول المسؤولين؟|ما ربط هوية منصة cloud بالدليل؟
Encryption|كيف تحمي صور وvolume بيانات حساسة؟|ما مفاتيح وتشفير ساكن وأثناء النقل؟`],
['Operations',`Telemetry|كيف تجمع زمن استجابة وتحميل hosts؟|ما بث قياسات ومراقبة؟
Automation|كيف تعيد نشر tenant من تعريف مراجَع؟|ما بنية ككود وقوالب؟
Chaos test|كيف تثبت التصميم تحت فشل switch؟|ما تجربة عطل مضبوطة؟
Incident playbook|خدمة تباطأت بعد تحديث. ما الخطوة؟|ما فحص خط أساس وتراجع وتصعيد؟
Acceptance test|متى تعتبر بنية السحابة جاهزة؟|ما أهداف توافر وأداء وأمن قابلة للقياس؟`]
]},
{id:'mikrotik-mtcna',name:'MikroTik MTCNA',minutes:90,groups:[
['RouterOS Basics',`WinBox|كيف تدخل واجهة إدارة رسومية لراوتر MikroTik؟|ما أداة إدارة RouterOS؟
CLI|كيف تفحص التهيئة عبر الطرفية؟|ما واجهة أوامر RouterOS؟
Safe Mode|كيف تتراجع تغييرات عند انقطاع جلسة الإدارة؟|ما نمط تعديل مؤقت في RouterOS؟
Backup|كيف تحفظ إعدادات الجهاز قبل تحديث؟|ما نسخة ثنائية للتهيئة؟
Export|كيف تحصل على نص أوامر قابل للمراجعة؟|ما تصدير config بصيغة script؟`],
['IP and Routing',`DHCP server|كيف توزع IP للعملاء تلقائيًا؟|ما خدمة lease للشبكة؟
Static route|كيف تحدد بوابة شبكة بعيدة؟|ما مسار يدوي في routing table؟
DNS cache|كيف يسرع الراوتر حل أسماء مكررة؟|ما تخزين مؤقت لاستجابات الأسماء؟
NAT masquerade|كيف تشارك عدة عناوين خاصة في WAN واحد؟|ما srcnat خروج ديناميكي؟
Firewall filter|كيف تمنع حركة إدارة من الإنترنت؟|ما قاعدة input chain للتحكم؟`],
['Layer 2',`Bridge|كيف تجمع منافذ ضمن LAN واحدة؟|ما واجهة Layer 2 افتراضية؟
VLAN|كيف تفصل broadcast domains؟|ما شبكة موسومة 802.1Q؟
STP|كيف تمنع loop في bridge؟|ما بروتوكول شجرة ممتدة؟
Wireless SSID|ما اسم شبكة Wi-Fi المعروض؟|ما معرف خدمة لاسلكية؟
Interface list|كيف تجمع WAN ports لقواعد مشتركة؟|ما قائمة منافذ تستخدمها سياسات؟`],
['Operations',`Torch|كيف ترى traffic لحظية على interface؟|ما أداة تحليل مرور مباشر؟
Ping|كيف تختبر وصول IP؟|ما ICMP echo؟
Traceroute|كيف تعرف مسار حزمة عبر القفزات؟|ما أداة تتبع hops؟
Log|كيف ترى رفض مصادقة أو خطأ interface؟|ما سجل أحداث RouterOS؟
Queues|كيف تحد معدل مستخدم؟|ما آلية ضبط bandwidth؟`]
]},
{id:'mikrotik-mtcre',name:'MikroTik MTCRE',minutes:90,groups:[
['Routing Fundamentals',`Routing table|أين ترى أفضل مسار لكل destination؟|ما جدول routes في RouterOS؟
Administrative distance|كيف تفضل static على بروتوكول آخر؟|ما أولوية مصدر route؟
Default route|كيف ترسل وجهات غير معروفة لمزود؟|ما 0.0.0.0/0؟
ECMP|كيف تستخدم مسارين متساويين؟|ما توزيع المرور بين next-hops؟
Policy routing|كيف توجه قسمًا عبر WAN معين؟|ما قواعد اختيار جدول بديل؟`],
['OSPF',`Neighbor|OSPF لا يتبادل مسارات. ما فحص أول؟|ما حالة adjacency بين الراوترات؟
Area 0|ما منطقة backbone في OSPF؟|ما أساس ربط المناطق؟
LSA|كيف ينقل OSPF topology؟|ما إعلان link-state؟
Cost|كيف يؤثر metric على اختيار المسار؟|ما تكلفة واجهة OSPF؟
Summarization|كيف تقلل routes عند boundary؟|ما تجميع prefixes؟`],
['BGP and Advanced',`eBGP|كيف تتبادل prefixes مع مزود خارجي؟|ما جلسة بين AS مختلفين؟
AS path|كيف ترى الأنظمة التي مر بها إعلان؟|ما attribute يصف AS sequence؟
Filter rule|كيف تمنع إعلان شبكة خاصة خطأ؟|ما سياسة قبول ونشر prefixes؟
Next hop|Route موجودة ولا تعمل. ما وصول تفحص؟|ما gateway لBGP prefix؟
Route recursion|كيف يحل الراوتر next-hop غير مباشر؟|ما بحث مسار للوصول إلى gateway؟`],
['Troubleshooting',`Traceroute|كيف تحد قفزة انقطاع؟|ما أداة تتبع TTL؟
BFD|كيف تسرع كشف فشل بين راوترين؟|ما فحص forwarding سريع؟
Failover test|كيف تثبت انتقال WAN بعد سقوط الأول؟|ما تجربة فصل رابط وقياس زمن؟
Log|أين تراجع flap جلسة routing؟|ما أحداث بروتوكول في RouterOS؟
Rollback|تغيير route قطع الإدارة. كيف تتجنب ذلك؟|ما Safe Mode أو خطة تراجع؟`]
]},
{id:'mikrotik-mtcine',name:'MikroTik MTCINE',minutes:120,groups:[
['Advanced BGP',`Route filtering|كيف تمنع leak لشبكات عميل؟|ما سياسة إعلانات BGP؟
Local preference|كيف تفضل WAN خروجًا داخل AS؟|ما سمة اختيار داخلي؟
AS path prepending|كيف تؤثر على دخول traffic؟|ما إطالة مسار إعلان؟
Community|كيف توسّم routes لإجراء مشترك؟|ما tag في BGP؟
Route reflector|كيف تتجنب full mesh iBGP؟|ما عاكس إعلانات بين clients؟`],
['MPLS',`Label switching|كيف تمرر حزمة حسب label بدل lookup IP كامل؟|ما forwarding في MPLS؟
LDP|كيف توزع labels بين routers؟|ما بروتوكول FEC-label؟
VPLS|كيف تمدد Layer 2 بين موقعين عبر core؟|ما خدمة Ethernet افتراضية متعددة النقاط؟
L3VPN|كيف تفصل جداول عملاء؟|ما VRF وخدمة VPN طبقة ثالثة؟
PHP|ما إزالة label عند penultimate hop؟|ما تحسين معالجة label الأخير؟`],
['Traffic Engineering',`ECMP|كيف توزع تدفقات على مسارات متساوية؟|ما تعدد next-hops متكافئة؟
QoS|كيف تحفظ أولوية الصوت؟|ما تصنيف وطوابير؟
BFD|كيف تكشف فشل data-plane بسرعة؟|ما جلسة مراقبة forwarding؟
Route convergence|كم يستغرق تحول المسار؟|ما قياس زمن تقارب بعد فشل؟
Capacity planning|كيف تتحمل فشل uplink دون ازدحام؟|ما هامش bandwidth في التصميم؟`],
['Operations',`Route table debug|Prefix موجودة في BGP لا RIB. ماذا تفحص؟|ما next-hop وسياسة وأولوية؟
Packet sniffer|كيف ترى حزم جلسة routing؟|ما التقاط traffic على interface؟
Logging|كيف تربط flap بوقت تغيير؟|ما سجل أحداث متزامن؟
Configuration backup|كيف تحفظ تهيئة قبل تغيير core؟|ما نسخة قابلة للاستعادة؟
Failure drill|كيف تختبر فقد peer BGP دون الإنتاج؟|ما سيناريو معزول ومقاييس؟`]
]},
{id:'mikrotik-mtcwe',name:'MikroTik MTCWE',minutes:90,groups:[
['Wireless RF',`RSSI|كيف تقيس قوة الإشارة المستقبلة؟|ما مؤشر قدرة RF؟
SNR|إشارة قوية لكن ضوضاء أعلى. ما المقياس؟|ما الفرق بين signal وnoise؟
Channel width|مبنى كثيف؛ ما ضبط يوازن السرعة والتداخل؟|ما اختيار 20/40/80 MHz؟
Co-channel interference|APs كثيرة على القناة نفسها. ما المشكلة؟|ما ازدحام هوائي بسبب إعادة استخدام سيئة؟
Antenna gain|كيف تركز الإشارة لاتجاه معين؟|ما خصائص الهوائي والانتشار؟`],
['RouterOS Wireless',`SSID|كيف تميز اسم WLAN للمستخدمين؟|ما معرف شبكة لاسلكية؟
Security profile|أين تضبط مصادقة وتشفير Wi-Fi؟|ما قالب حماية wireless؟
Bridge|كيف تربط حركة العملاء مع LAN؟|ما واجهة Layer 2 تجمع اللاسلكي والسلكي؟
WDS|كيف تربط نقاط لاسلكية Layer 2 عند الحاجة؟|ما Wireless Distribution System؟
Access list|كيف تحد عملاء بحسب MAC/إشارة؟|ما شروط قبول عميل لاسلكي؟`],
['Design',`Site survey|كيف تحد توزيع APs قبل النشر؟|ما قياس ميداني للتغطية والتداخل؟
Line of sight|وصلة بعيدة ضعيفة رغم طاقة كافية. ما فحص؟|ما رؤية Fresnel وعيوب مسار؟
Power budget|هل الجهاز يستقبل طاقة PoE كافية؟|ما قدرة السويتش والـAP؟
Roaming|عميل يتحرك بين APs. ما الخاصية؟|ما انتقال اتصال لاسلكي بين خلايا؟
Capacity planning|قاعة تضم 200 مستخدم. ما العامل؟|ما حمل متزامن وقنوات وعدد APs؟`],
['Troubleshooting',`Spectrum scan|كيف تكشف تداخل غير Wi-Fi؟|ما تحليل طيف الراديو؟
Retransmissions|لماذا throughput ضعيف مع RSSI جيد؟|ما إعادة إرسال بسبب ازدحام؟
DHCP|عميل يتصل بالشبكة بلا IP. ما فحص؟|ما توزيع عناوين بعد association؟
Client signal|كيف تميز مشكلة عميل بعيد؟|ما RSSI/SNR لكل محطة؟
Post-change survey|بعد تغيير القنوات، كيف تثبت التحسن؟|ما قياس قبل وبعد للموقع؟`]
]},
{id:'mikrotik-mtctce',name:'MikroTik MTCTCE',minutes:90,groups:[
['QoS Concepts',`Classification|كيف تحد نوع المرور قبل جدولته؟|ما تعيين فئة بناء على عنوان/منفذ؟
Marking|كيف تضع DSCP أو packet mark؟|ما وسم traffic للسياسة؟
Shaping|كيف تجعل معدل الإرسال متوافقًا مع الحد؟|ما تأخير/جدولة بدل إسقاط فوري؟
Policing|كيف تسقط أو تعيد وسم ما يتجاوز حدًا؟|ما ضبط معدل بقرار على الزيادة؟
Queue|أين تنتظر الحزم قبل الإرسال؟|ما طابور جدولة traffic؟`],
['RouterOS Queues',`Simple queue|كيف تحد سرعة مستخدم بسرعة؟|ما قاعدة سهلة لtarget واحد؟
Queue tree|كيف تبني فئات متدرجة لمجموعات مرور؟|ما هيكل صفوف قائم على marks؟
PCQ|كيف توزع سعة بالتساوي على عملاء كثيرين؟|ما per-connection queue؟
Burst|كيف تسمح بسرعة أعلى لفترة قصيرة؟|ما حد مؤقت فوق المعدل؟
Priority|كيف تفضل VoIP وقت الازدحام؟|ما ترتيب خدمة للطوابير؟`],
['Firewall Marking',`Mangle|أين تضع packet/connection marks؟|ما قواعد تغيير metadata للمرور؟
Connection mark|كيف تربط حزم جلسة بالفئة نفسها؟|ما وسم حالة اتصال؟
Packet mark|ما قيمة تستخدمها queue tree لاختيار حزم؟|ما وسم حزمة في RouterOS؟
DSCP|كيف تنقل أولوية بين أجهزة متعددة؟|ما حقل خدمة في رأس IP؟
FastTrack caveat|Queues لا تؤثر في بعض المرور. ماذا تفحص؟|ما مسار سريع قد يتجاوز معالجة قواعد؟`],
['Troubleshooting',`Bandwidth test|كيف تقيس سعة رابط بحذر؟|ما اختبار مرور مضبوط؟
Latency|VoIP يتأخر عند الذروة. ما مؤشر؟|ما زمن عبور الحزم؟
Jitter|الصوت متقطع مع تغير التأخير. ما المقياس؟|ما تذبذب زمن وصول؟
Packet loss|مكالمة تفقد مقاطع. ما مؤشر؟|ما نسبة الحزم المسقطة؟
Queue counters|كيف تتحقق من وقوع traffic في الفئة الصحيحة؟|ما عدادات packets/bytes في queue؟`]
]},
{id:'mikrotik-mtcse',name:'MikroTik MTCSE',minutes:90,groups:[
['Router Hardening',`Strong authentication|كيف تحمي دخول RouterOS؟|ما كلمة قوية ومفاتيح/هوية محددة؟
Management isolation|كيف تمنع SSH من Internet العام؟|ما واجهة/شبكة إدارة وACL؟
Least privilege|ما صلاحية مشغل مراقبة فقط؟|ما مجموعة وصول أدنى؟
Update policy|كيف تغلق ثغرات RouterOS؟|ما تحديث مجدول ومختبر؟
Backup|كيف تتراجع عن إعداد أمن خاطئ؟|ما نسخة config واستعادة؟`],
['Firewall',`Input chain|كيف تحمي خدمات الراوتر نفسه؟|ما قواعد مرور الوجهة الجهاز؟
Forward chain|كيف تمنع عميلًا من الوصول لشبكة أخرى؟|ما قواعد مرور عابر للراوتر؟
Connection tracking|كيف تسمح established/relevant وتمنع invalid؟|ما حالة جلسة في RouterOS؟
Address list|كيف تجمع IPs لسياسة واحدة؟|ما قائمة عناوين ديناميكية/ثابتة؟
NAT|كيف تخفي LAN خلف عنوان WAN؟|ما srcnat/masquerade؟`],
['VPN',`IPsec|كيف تشفر اتصال موقعين؟|ما نفق طبقة شبكة آمن؟
WireGuard|كيف تنشئ VPN خفيفة بمفاتيح عامة؟|ما بروتوكول tunnel حديث؟
Peer authentication|كيف تمنع طرفًا غير معروف من اتصال؟|ما هوية ومفاتيح VPN؟
Split tunnel|كيف تمرر شبكات الشركة فقط عبر VPN؟|ما سياسة مسارات انتقائية؟
Key rotation|سر VPN انكشف. ماذا تفعل؟|ما إبطال وتغيير مفتاح؟`],
['Monitoring',`Log|كيف ترى محاولات دخول فاشلة؟|ما سجل RouterOS للأمن؟
Traffic flow|كيف ترى مصادر واتجاهات المرور؟|ما تصدير NetFlow/IPFIX؟
Packet sniffer|كيف تفحص handshake متعطل؟|ما التقاط حزم؟
Port scan detection|كيف تستجيب لمسح منافذ متكرر؟|ما قواعد مراقبة وتحديد معدل؟
Incident isolation|جهاز داخلي مصاب. ما حد سريع؟|ما address list ومنع اتصالاته؟`]
]},
{id:'cncf-kcna',name:'CNCF KCNA',minutes:90,groups:[
['Kubernetes',`Pod|ما أصغر وحدة تشغيل للحاويات؟|ما كائن يجمع حاوية أو أكثر؟
Deployment|كيف تدير نسخ تطبيق دون توقف؟|ما كائن يضبط عدد Pods؟
Service|كيف تمنح Pods عنوان وصول ثابتًا؟|ما واجهة اكتشاف داخل العنقود؟
Namespace|كيف تفصل موارد فرق داخل عنقود؟|ما نطاق أسماء منطقي؟
ConfigMap|أين تضع إعدادات غير سرية للتطبيق؟|ما كائن إعدادات نصية؟`],
['Architecture',`Control plane|من يدير الحالة المطلوبة للعنقود؟|ما مكونات API والجدولة والتحكم؟
Worker node|أين تعمل حاويات التطبيق فعليًا؟|ما جهاز يستضيف Pods؟
Scheduler|من يختار عقدة مناسبة لـ Pod؟|ما مكون توزيع الأحمال على العقد؟
Etcd|أين تحفظ حالة Kubernetes؟|ما مخزن مفاتيح موزع؟
Kubelet|ما وكيل العقدة الذي يشغل Pods؟|من يبلغ control plane بحالة الحاويات؟`],
['Cloud Native',`Container image|كيف تحزم التطبيق واعتمادياته؟|ما قالب تشغيل غير قابل للتغيير؟
Registry|أين تحفظ صور الحاويات؟|ما مستودع صور قابل للسحب؟
Declarative configuration|كيف تصف الحالة المطلوبة بدل الأوامر المتتابعة؟|ما نموذج manifests؟
GitOps|كيف تجعل Git مصدر التغييرات التشغيلية؟|ما مزامنة حالة العنقود مع المستودع؟
Autoscaling|كيف تزيد نسخ التطبيق وفق الحمل؟|ما ضبط تلقائي للسعة؟`],
['Observability',`Metrics|كيف تقيس استهلاك CPU والذاكرة؟|ما قياسات رقمية زمنية؟
Logs|كيف تبحث عن أخطاء التطبيق النصية؟|ما أحداث مسجلة؟
Traces|كيف تتبع طلبًا بين خدمات؟|ما تتبع موزع؟
Readiness probe|كيف تمنع إرسال الطلبات إلى Pod غير جاهز؟|ما فحص جاهزية الخدمة؟
Liveness probe|كيف تعيد تشغيل حاوية متوقفة منطقيًا؟|ما فحص حياة الحاوية؟`]
]},
{id:'oracle-oci-architect-associate',name:'Oracle OCI Architect Associate',minutes:90,groups:[
['Core OCI',`Compartment|كيف تعزل موارد فريق في tenancy؟|ما حاوية تنظيم وصلاحيات؟
Region|كيف تختار موقعًا جغرافيًا للموارد؟|ما نطاق جغرافي مستقل؟
Availability domain|كيف توزع موارد داخل region لتحمل عطل مركز؟|ما مركز بيانات مستقل منطقيًا؟
Fault domain|كيف توزع مثيلات ضد عطل رف؟|ما مجموعة عتاد معزولة داخل AD؟
IAM policy|كيف تمنح مجموعة حق قراءة مورد؟|ما تصريح صلاحيات OCI؟`],
['Networking',`VCN|ما شبكة OCI الافتراضية الخاصة؟|ما نطاق عناوين وشبكات فرعية؟
Subnet|كيف تقسم VCN إلى قطاعات؟|ما شبكة فرعية في VCN؟
Internet gateway|كيف يصل مورد عام للإنترنت؟|ما بوابة مرور Internet؟
NAT gateway|كيف تحدث خادمًا خاصًا دون IP عام؟|ما خروج إنترنت لموارد خاصة؟
Service gateway|كيف تصل لخدمات Oracle دون عبور الإنترنت العام؟|ما بوابة خدمات OCI؟`],
['Compute and Storage',`Compute instance|كيف تشغل خادمًا افتراضيًا؟|ما مثيل حوسبة؟
Block Volume|ما قرص دائم لمثيل؟|ما تخزين كتلي قابل للوصل؟
Object Storage|أين تحفظ ملفات غير مهيكلة بأعداد كبيرة؟|ما تخزين كائنات؟
File Storage|كيف تشارك ملفات NFS بين خوادم؟|ما تخزين ملفات مُدار؟
Load Balancer|كيف توزع طلبات الويب على مثيلات؟|ما موزع أحمال؟`],
['Resilience',`Backup policy|كيف تؤتمت نسخ Volume؟|ما سياسة نسخ احتياطي؟
Multi-AD design|كيف تتحمل انقطاع نطاق توافر؟|ما نشر عبر أكثر من AD؟
Auto Scaling|كيف تضبط عدد المثيلات حسب الحمل؟|ما توسع تلقائي؟
Monitoring|كيف تضع تنبيهًا على معدل CPU؟|ما مقاييس وإنذارات OCI؟
Vault|أين تحفظ مفاتيح التشفير والأسرار؟|ما خدمة إدارة مفاتيح؟`]
]},
{id:'oracle-oci-architect-professional',name:'Oracle OCI Architect Professional',minutes:120,groups:[
['Architecture',`RTO|ما الزمن الأقصى المقبول لاستعادة الخدمة؟|ما هدف وقت التعافي؟
RPO|ما حجم فقد البيانات المقبول زمنيًا؟|ما هدف نقطة التعافي؟
Multi-region DR|كيف تصمد أمام انقطاع منطقة كاملة؟|ما تعافٍ عبر مناطق OCI؟
Active-active|كيف تخدم مناطق متعددة الطلبات في الوقت نفسه؟|ما توزيع تشغيل متزامن؟
Cost optimization|كيف تقلص موارد زائدة دون خفض المتطلبات؟|ما مواءمة سعة وتكلفة؟`],
['Advanced Networking',`Dynamic Routing Gateway|كيف تصل VCN بشبكة محلية أو VCN أخرى؟|ما DRG في OCI؟
FastConnect|كيف تحصل على اتصال خاص ثابت للمؤسسة؟|ما ربط مخصص خارج الإنترنت؟
Site-to-Site VPN|كيف تصل مقرًا إلى OCI عبر نفق مشفر؟|ما IPSec VPN؟
Hub and spoke|كيف توحد المرور بين شبكات متعددة عبر مركز؟|ما طوبولوجيا VCN مركزية؟
DNS traffic management|كيف تحول المستخدمين إلى endpoint سليم؟|ما توجيه DNS قائم على الصحة؟`],
['Data and Security',`Database Data Guard|كيف تنسخ Oracle Database إلى موقع احتياطي؟|ما خدمة standby للقاعدة؟
Cross-region replication|كيف تنسخ الكائنات لمنطقة أخرى؟|ما نسخ Object Storage إقليمي؟
Customer-managed keys|كيف تتحكم بمفتاح تشفير بيانات الخدمة؟|ما مفتاح تديره المؤسسة في Vault؟
Security Zones|كيف تفرض ضوابط تمنع إعدادًا غير آمن؟|ما سياسات أمن على compartments؟
Cloud Guard|كيف تكتشف سوء ضبط وتهديدات السحابة؟|ما خدمة مراقبة posture؟`],
['Operations',`Resource Manager|كيف تدير بنية OCI عبر Terraform؟|ما خدمة infrastructure as code؟
Events|كيف تبدأ أتمتة عند تغير مورد؟|ما قواعد أحداث OCI؟
Functions|كيف تنفذ معالجة قصيرة عند حدث؟|ما حوسبة serverless؟
Logging Analytics|كيف تحلل سجلات متنوعة مركزيًا؟|ما خدمة تحليل logs؟
Full Stack Disaster Recovery|كيف تنسق استعادة تطبيق متعدد الطبقات؟|ما خطط DR مُدارة؟`]
]},
{id:'oracle-oci-networking',name:'Oracle OCI Networking',minutes:90,groups:[
['VCN Design',`VCN|ما حد الشبكة الافتراضية في OCI؟|ما شبكة سحابية محددة CIDR؟
Subnet|كيف تفصل tier ويب عن قواعد البيانات؟|ما جزء من VCN؟
Route table|كيف تحدد الوجهة التالية للمرور؟|ما قواعد توجيه subnet؟
Security list|كيف تضع قواعد أمنية على subnet؟|ما ACL على مستوى subnet؟
Network security group|كيف تحدد قواعد لواجهات تطبيق معينة؟|ما قواعد أمن لمجموعة VNICs؟`],
['Gateways',`Internet gateway|كيف تمنح subnet عامة وصولًا مباشرًا؟|ما بوابة للإنترنت؟
NAT gateway|كيف تمنح private subnet خروجًا دون دخول عام؟|ما بوابة NAT مُدارة؟
Service gateway|كيف تصل Object Storage عبر شبكة Oracle؟|ما بوابة خدمات OCI؟
Dynamic Routing Gateway|كيف تربط شبكات محلية وVCNs؟|ما DRG؟
Local peering gateway|كيف تصل VCNين في المنطقة نفسها؟|ما LPG؟`],
['Hybrid',`FastConnect|ما ربط خاص لا يعتمد على الإنترنت؟|ما اتصال مخصص مع OCI؟
IPSec VPN|ما نفق مشفر من مقر إلى OCI؟|ما site-to-site VPN؟
BGP|كيف تتبادل المسارات ديناميكيًا عبر الاتصال؟|ما بروتوكول توجيه بين الأنظمة؟
Remote peering|كيف تصل VCNين في منطقتين؟|ما ربط بعيد عبر DRG؟
DNS resolver|كيف تحل أسماء داخل VCN ومن المقر؟|ما خدمة حل أسماء خاصة؟`],
['Operations',`Load Balancer|كيف توزع اتصالات التطبيقات؟|ما خدمة موازنة حمل؟
Network Load Balancer|كيف تمرر اتصال TCP/UDP بزمن قليل؟|ما موزع أحمال طبقة نقل؟
Flow logs|كيف تحقق في مرور مرفوض أو مسار؟|ما سجلات تدفق VCN؟
VTAP|كيف تنسخ حركة VNIC للتحليل؟|ما virtual test access point؟
Network Path Analyzer|كيف تحدد سبب عدم وصول طرف إلى آخر؟|ما أداة تحليل مسار OCI؟`]
]},
{id:'oracle-oci-security',name:'Oracle OCI Security',minutes:90,groups:[
['Identity',`IAM policy|كيف تمنح مجموعة أقل صلاحية لمورد؟|ما قاعدة سماح في OCI؟
Dynamic group|كيف تمنح موارد حوسبة هوية للوصول إلى خدمات؟|ما تجميع موارد حسب قواعد؟
MFA|كيف تضيف عاملًا ثانيًا للمسؤول؟|ما تحقق متعدد العوامل؟
Federation|كيف تستخدم موفر هوية المؤسسة؟|ما تكامل هوية خارجي؟
Compartment|كيف تعزل الموارد والسياسات بين الفرق؟|ما حد تنظيمي في tenancy؟`],
['Data Protection',`Vault|كيف تدير مفاتيح التشفير؟|ما خدمة KMS وأسرار؟
Customer-managed key|كيف تتحكم بدورة حياة مفتاح البيانات؟|ما CMK؟
Secret rotation|كيف تغير كلمة اعتماد مخزنة دوريًا؟|ما تدوير سر؟
Block Volume encryption|كيف تحمي بيانات قرص مثيل وهي ساكنة؟|ما تشفير وحدة تخزين؟
Object Storage private bucket|كيف تمنع الوصول العام للملفات؟|ما حاوية كائنات خاصة؟`],
['Threat Management',`Cloud Guard|كيف تكتشف إعدادات محفوفة بالمخاطر؟|ما خدمة اكتشاف واستجابة posture؟
Security Zones|كيف تمنع إنشاء مورد يخالف قواعد الأمن؟|ما منطقة بقيود إلزامية؟
Web Application Firewall|كيف تخفف هجمات HTTP الشائعة؟|ما WAF؟
Vulnerability Scanning|كيف تفحص مثيلات لثغرات؟|ما خدمة تقييم ضعف؟
Bastion|كيف تدخل خادمًا خاصًا دون IP عام؟|ما وصول إداري مؤقت مُدار؟`],
['Network and Audit',`Network security group|كيف تسمح فقط لمنفذ تطبيق محدد؟|ما قواعد على VNICs؟
Private subnet|كيف تمنع توجيهًا مباشرًا من الإنترنت؟|ما شبكة فرعية بلا وصول عام مباشر؟
Audit|كيف ترى من غيّر سياسة IAM؟|ما سجل أحداث API؟
Logging|كيف تجمع سجلات الموارد للتحقيق؟|ما خدمة سجلات OCI؟
Notifications|كيف تنبه الفريق عند حدث أمني؟|ما إشعارات مرتبطة بإنذارات؟`]
]}
];
for(const bank of REMAINING_BANKS){
 const questions=[];
 if(bank.groups.length!==4)throw Error(`Invalid groups: ${bank.id}`);
 for(const [topic,raw] of bank.groups){
  const rows=raw.trim().split('\n').map(line=>line.split('|').map(value=>value.trim()));
  if(rows.length!==5||rows.some(row=>row.length!==3))throw Error(`Invalid rows: ${bank.id}/${topic}`);
  rows.forEach(([correct,scenario,followup],i)=>{
   [scenario,followup].forEach((prompt,variant)=>{
    const offsets=variant?[1,3,4]:[1,2,3];
    const options=[correct,...offsets.map(offset=>rows[(i+offset)%5][0])];
    if(new Set(options).size!==4)throw Error(`Duplicate options: ${bank.id}/${topic}`);
    questions.push({topic,text:prompt,options,answer:0,why:`${correct} هو المفهوم المناسب للحالة المذكورة ضمن محور ${topic}.`});
   });
  });
 }
 if(questions.length!==40||new Set(questions.map(question=>question.text)).size!==40)throw Error(`Invalid questions: ${bank.id}`);
 window.OMNITECH_EXAMS.push({id:bank.id,name:bank.name,track:'Diagnostic practice',minutes:bank.minutes,coverage:'20 مفهومًا بسيناريوهين لكل مفهوم',questions});
}
