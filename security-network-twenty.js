// Condensed educational diagnostics: 20 distinct concepts, two scenarios per concept.
const SECURITY_NETWORK_BANKS=[
{id:'jncia-junos',name:'HPE Juniper JNCIA-Junos',minutes:90,groups:[
['Junos Fundamentals',`Control plane|أي جزء يحسب مسارات ويشغل بروتوكولات التوجيه؟|ما وظيفة Routing Engine في Junos؟
Forwarding plane|أي جزء يمرر الحزم بسرعات الخط؟|ما وظيفة Packet Forwarding Engine؟
Candidate configuration|أين تُحفظ التعديلات قبل تفعيلها؟|ما الفرق بين edit وcommit في Junos؟
Commit|كيف تجعل تعديلات candidate فعالة؟|ما الأمر الذي يراجع ثم يفعّل التهيئة؟
Rollback|كيف تعود إلى تهيئة سابقة بعد خطأ؟|ما آلية التراجع عن commit؟`],
['CLI and Configuration',`Operational mode|أين تشغّل show interfaces وping؟|ما وضع CLI للفحص دون تعديل التهيئة؟
Configuration mode|أين تشغّل set interfaces؟|ما وضع CLI لتعديل candidate config؟
Commit confirmed|كيف تجعل التغيير يتراجع آليًا إن فقدت الاتصال؟|ما نمط commit يحتاج تأكيدًا خلال مهلة؟
Show compare|كيف ترى فرق candidate عن active؟|ما أمر معاينة التغييرات قبل commit؟
Configuration hierarchy|كيف تتبع إعدادًا تحت interfaces ثم unit؟|ما بنية Junos المتدرجة للإعدادات؟`],
['Routing',`Static route|كيف تضيف مسارًا يدويًا إلى شبكة بعيدة؟|ما next-hop محدد في routing-options؟
Default route|كيف توجه وجهات غير معروفة إلى بوابة؟|ما 0.0.0.0/0 في جدول التوجيه؟
OSPF|ما بروتوكول link-state داخلي بين الراوترات؟|كيف تتبادل LSAs وحساب shortest path؟
BGP|كيف تتبادل مسارات بين أنظمة مستقلة؟|ما بروتوكول inter-AS routing؟
Routing table|أين ترى المسار المختار لكل prefix؟|ما جدول inet.0 الذي يضم routes؟`],
['Interfaces and Security',`Logical unit|كيف تضبط عنوان IP على جزء منطقي من واجهة؟|ما unit 0 تحت interface في Junos؟
VLAN|كيف تفصل broadcast domains على سويتش؟|ما معرف Layer 2 للشبكة الافتراضية؟
Firewall filter|كيف تطبق شروط سماح/منع على interface؟|ما قائمة terms في Junos لتصفية الحزم؟
Policer|كيف تحد معدل حركة معينة؟|ما آلية rate limiting على traffic؟
Syslog|كيف تسجل أحداث الجهاز مركزيًا؟|ما خدمة رسائل التشغيل والأمن؟`]
]},
{id:'jncis-ent',name:'HPE Juniper JNCIS-ENT',minutes:90,groups:[
['Layer 2',`RSTP|كيف تمنع loop وتسرّع convergence في switching؟|ما تطوير STP للشبكات المحلية؟
VLAN trunk|كيف تنقل عدة VLANs على وصلة واحدة؟|ما tagging بين سويتشين؟
LACP|كيف تجمع عدة منافذ في وصلة منطقية؟|ما تفاوض 802.3ad بين الطرفين؟
MAC learning|كيف يعرف السويتش منفذ الوجهة؟|ما بناء جدول عناوين Layer 2؟
IRB|كيف توفر routing بين VLANs عبر واجهة منطقية؟|ما integrated routing and bridging في Junos؟`],
['OSPF',`Area 0|ما العمود الفقري الذي يربط مناطق OSPF؟|ما backbone area في OSPF؟
Neighbor adjacency|لماذا لا يظهر route رغم اتصال الواجهات؟|ما حالة الجيران التي تفحص أولًا؟
LSA|كيف ينشر OSPF معلومات topology؟|ما إعلان حالة الرابط؟
DR election|كيف تقلل adjacency على شبكة broadcast؟|ما دور designated router؟
Cost|كيف يؤثر عرض النطاق على مسار OSPF؟|ما metric لتفضيل رابط؟`],
['Routing Policy',`Prefix list|كيف تحصر شبكات مسموح إعلانها؟|ما قائمة prefixes للمطابقة؟
Policy statement|كيف تضبط import/export routes؟|ما terms في Junos لتغيير قبول المسارات؟
Route redistribution|كيف تدخل static routes إلى OSPF؟|ما export policy بين مصادر التوجيه؟
BGP local preference|كيف تختار مخرجًا داخل AS؟|ما سمة iBGP لتفضيل الخروج؟
Next-hop reachability|BGP route موجودة وغير فعالة. ما فحص؟|أي وصول إلى next-hop لازم؟`],
['Operations',`Commit confirmed|تغيير routing قد يقطع الإدارة. ماذا تستخدم؟|ما تراجع تلقائي إن لم تؤكد؟
Interface counters|كيف تكتشف أخطاء link متزايدة؟|ما عدادات drops وCRC؟
Routing instance|كيف تفصل جدول توجيه خدمة عن أخرى؟|ما سياق توجيه مستقل في Junos؟
BFD|كيف تكشف فقد المسار أسرع من hello المعتاد؟|ما جلسة مراقبة forwarding سريعة؟
Log review|بعد رفض route بسياسة، أين ترى أحداث التشغيل؟|ما syslog ورسائل البروتوكول؟`]
]},
{id:'jncip-ent',name:'HPE Juniper JNCIP-ENT',minutes:120,groups:[
['Advanced OSPF',`Stub area|كيف تمنع external LSAs من دخول منطقة فرعية؟|ما نوع منطقة OSPF تقلل جدول مسارات؟
NSSA|تريد ASBR داخل منطقة مع تقليل externals. ما النوع؟|ما منطقة OSPF تسمح Type 7؟
Summarization|كيف تقلل prefixes عند ABR؟|ما تجميع مسارات بين المناطق؟
Virtual link|كيف تصل Area 0 غير متصلة مؤقتًا؟|ما وصلة OSPF افتراضية عبر transit area؟
BFD|تحتاج كشف فقد أسرع لجار OSPF. ما الإضافة؟|ما فحص data-plane سريع؟`],
['Advanced BGP',`Route reflector|كيف تقلل full mesh بين iBGP peers؟|ما عقدة تعكس إعلانات لعملائها؟
AS-path prepending|كيف تجعل مسار دخول أقل تفضيلًا خارجيًا؟|ما تكرار AS في الإعلان؟
Communities|كيف توسّم routes لسياسة مشتركة؟|ما قيمة مرتبطة بإعلان BGP؟
Local preference|كيف تفضل خروجًا على آخر داخل AS؟|ما attribute ذو أولوية داخلية؟
Route filtering|كيف تمنع route leak لعميل؟|ما سياسات import/export على الحافة؟`],
['Multicast and Switching',`PIM-SM|كيف تبني multicast tree بمصدر/مجموعة؟|ما بروتوكول multicast sparse mode؟
Rendezvous point|ما نقطة اللقاء في PIM-SM التقليدي؟|أين تجتمع مصادر ومستقبلو multicast؟
IGMP snooping|كيف تمنع flood multicast لكل منافذ VLAN؟|ما تتبع عضوية المجموعات على السويتش؟
EVPN|كيف تنقل معلومات MAC/IP عبر BGP في fabric؟|ما control plane لامتداد Layer 2 حديث؟
LACP|وصلة مجمعة يعمل منها عضو واحد. ماذا تفحص؟|ما تفاوض وخصائص bundle؟`],
['Assurance',`Policy trace|Route لم تدخل جدولًا بعد import policy. ماذا تراجع؟|ما نتيجة term وترتيبه؟
Convergence testing|بعد فشل uplink، ما مقياس؟|ما زمن انتقال المسار وpacket loss؟
Configuration groups|كيف تعيد استخدام تهيئة على واجهات كثيرة؟|ما apply-groups في Junos؟
Telemetry|كيف تجمع حالة interfaces باستمرار؟|ما بث مقاييس تشغيلي؟
Rollback plan|قبل سياسة BGP واسعة، ماذا تحفظ؟|ما نسخة وخطة رجوع مختبرة؟`]
]},
{id:'jncis-sp',name:'HPE Juniper JNCIS-SP',minutes:90,groups:[
['Provider Core',`IS-IS|أي IGP شائع في قلب المزود؟|ما بروتوكول link-state بمستويات L1/L2؟
OSPF|كيف تتبادل LSAs ضمن مناطق؟|ما IGP بحساب SPF وArea 0؟
MPLS|كيف تمرر حزم اعتمادًا على labels؟|ما تقنية data-plane في provider core؟
LDP|كيف توزع labels حسب IGP التقليدي؟|ما بروتوكول تبادل FEC-label؟
BGP|كيف تتبادل مسارات بين ASs؟|ما inter-domain routing؟`],
['MPLS',`LER|من يضيف label عند دخول الشبكة؟|ما Label Edge Router عند حافة MPLS؟
LSR|من يبدل label داخل core؟|ما Label Switch Router؟
FEC|كيف تجمع حزمًا تعالج بالطريقة نفسها؟|ما Forwarding Equivalence Class؟
PHP|ما إزالة label عند القفزة قبل الأخيرة؟|ما penultimate hop popping؟
Label stack|كيف تضع transport وservice labels معًا؟|ما تكديس وسوم MPLS؟`],
['VPN Services',`VRF|كيف تفصل جداول عملاء L3VPN على PE؟|ما routing table خاص بالعميل؟
Route distinguisher|كيف تميز prefixes IPv4 متطابقة لعميلين؟|ما معرف VPNv4 unique؟
Route target|كيف تضبط استيراد وتصدير مسارات VRF؟|ما community لعضوية VPN؟
Pseudowire|كيف تربط منفذي Layer 2 عبر MPLS؟|ما قناة L2 افتراضية بين PEs؟
MP-BGP|كيف تنقل VPNv4 routes بين حواف المزود؟|ما BGP address families للخدمات؟`],
['Operations',`BFD|كيف تكشف فشل المسار بسرعة؟|ما جلسة مراقبة data-plane؟
QoS|كيف تفضل مرور الصوت عند ازدحام؟|ما تصنيف وجدولة للحزم؟
Route filtering|كيف تمنع إعلان default من عميل إلى core؟|ما قائمة prefixes مسموحة؟
Traceroute|كيف تحدد قفزة انقطاع في شبكة المزود؟|ما أداة تتبع مسار الحزم؟
Syslog|كيف تجمع أحداث routers مركزيًا؟|ما تسجيل رسائل التشغيل؟`]
]},
{id:'jncip-sp',name:'HPE Juniper JNCIP-SP',minutes:120,groups:[
['Advanced MPLS',`RSVP-TE|كيف تنشئ LSP بمتطلبات مسار وسعة؟|ما signaling لممر traffic engineering؟
Segment Routing|كيف تحدد مسارًا بقائمة SIDs دون LDP؟|ما source routing داخل provider core؟
Fast reroute|كيف تنتقل محليًا لمسار بديل فور سقوط رابط؟|ما حماية LSP قبل convergence العام؟
CSPF|كيف تحسب مسارًا بمتطلبات سعة وقيود؟|ما constraint-based SPF؟
Label stack|كيف تحمل service label فوق transport label؟|ما تمثيل multi-label للحزمة؟`],
['Advanced BGP',`Route reflector|كيف تعكس iBGP بين PEs بدل full mesh؟|ما control-plane scaling node؟
BGP communities|كيف تطبق سياسة موحدة على routes موسومة؟|ما tag للإعلانات؟
Local preference|كيف تتحكم في خروج AS؟|ما attribute داخلي لترجيح المسار؟
AS-path prepending|كيف تؤثر في اختيار الدخول من peers؟|ما إطالة AS path للإعلان؟
Prefix filtering|كيف تمنع leak لمسارات VPN؟|ما سياسة حدود الإعلانات؟`],
['L3 and L2 VPN',`Inter-provider VPN|كيف تربط VRF لعميل عبر مزودين؟|ما تصميم L3VPN عابر للـAS؟
EVPN|كيف تعلن MAC/IP عبر BGP؟|ما control plane Ethernet VPN؟
Route target|لماذا لا تدخل VPN route في VRF؟|ما import community التي تراجع؟
Multihoming|كيف توصل CE إلى PEين للتوافر؟|ما ربط مزدوج لخدمة VPN؟
Pseudowire|كيف توفر Layer 2 point-to-point عبر MPLS؟|ما قناة L2 افتراضية؟`],
['Design and Troubleshooting',`BFD|كيف تخفض زمن كشف الفشل في LSP؟|ما مراقبة اتصال سريعة؟
MTU|حزم صغيرة تعبر MPLS والكبيرة تفشل. ما السبب؟|ما overhead labels يجب احتسابه؟
RPKI|كيف تتحقق من شرعية origin AS؟|ما ROA للتحقق من BGP prefix؟
Route convergence|كيف تختبر فقد الحزم أثناء failover؟|ما قياس زمن استقرار المسارات؟
Policy rollback|تغيير export قطع عملاء. ما المخرج؟|ما تراجع آمن لخطة معتمدة؟`]
]},
{id:'jncia-cloud',name:'HPE Juniper JNCIA-Cloud',minutes:90,groups:[
['Cloud Concepts',`IaaS|عميل يدير OS على VM مستضافة. ما النموذج؟|ما خدمة بنية افتراضية؟
PaaS|تطبيق يعمل دون إدارة نظام الخادم. ما النموذج؟|ما runtime مُدار؟
SaaS|خدمة بريد جاهزة عبر المتصفح. ما النموذج؟|ما تطبيق مُدار بالكامل تقريبًا؟
Hybrid cloud|شركة تربط مقرها بسحابة عامة. ما التصميم؟|ما جمع بيئات خاصة وعامة؟
Multi-tenancy|كيف تستضيف بنية مشتركة عملاء معزولين؟|ما عزل موارد المستأجرين؟`],
['Networking',`Overlay|كيف تنشئ شبكة افتراضية فوق IP underlay؟|ما أنفاق تفصل tenant عن النقل؟
VXLAN|كيف تمدد Layer 2 عبر IP؟|ما encapsulation بمعرّف VNI؟
EVPN|كيف تعلن MAC/IP في fabric؟|ما BGP control plane للشبكات الافتراضية؟
SDN controller|كيف تدير سياسات شبكة مركزيًا؟|ما control plane برمجي للبنية؟
Load balancer|كيف توزع طلبات تطبيق بين backends؟|ما نقطة توزيع مع health checks؟`],
['Cloud Operations',`Orchestration|كيف تنسق إنشاء عدة موارد مترابطة؟|ما إدارة دورة حياة workloads؟
Infrastructure as code|كيف تعيد بناء شبكة من تعريف قابل للمراجعة؟|ما وصف الحالة المطلوبة في ملفات؟
Telemetry|كيف تقيس loss وlatency باستمرار؟|ما بث مؤشرات تشغيلية؟
Autoscaling|كيف تزيد القدرة مع الطلب وتنقصها لاحقًا؟|ما مرونة موارد حسب الحمل؟
Source of truth|كيف تمنع تعارض جرد الشبكات السحابية؟|ما قاعدة بيانات معتمدة للموارد؟`],
['Security',`IAM|كيف تمنح دورًا محددًا لمهندس فقط؟|ما إدارة هوية وصلاحيات؟
Segmentation|كيف تمنع انتقال حركة بين مستأجرين؟|ما فصل شبكات وسياسات؟
Encryption in transit|كيف تحمي البيانات أثناء مرورها؟|ما TLS أو IPsec بين الأطراف؟
Zero trust|كيف تقيّم كل طلب دون افتراض الثقة من موقعه؟|ما تحقق مستمر وأقل امتياز؟
Audit logs|كيف تعرف من غيّر سياسة cloud؟|ما سجل نشاط API والإدارة؟`]
]},
{id:'check-point-ccsa',name:'Check Point CCSA',minutes:90,groups:[
['Architecture',`Security Gateway|ما المكوّن الذي يفحص حركة الشبكة؟|أين تُطبق سياسة الحماية على المرور؟
Security Management Server|أين تدير القواعد والكائنات وتوزيع السياسة؟|ما خادم إدارة Check Point المركزي؟
SmartConsole|ما واجهة المسؤول لبناء policy؟|أين يراجع admin القواعد والسجلات؟
Security policy|كيف تحدد السماح والمنع وفق المصدر والوجهة والخدمة؟|ما مجموعة قواعد firewall؟
Policy installation|حفظت قاعدة جديدة ولا تعمل. ما الخطوة؟|كيف تنشر السياسة على Gateway؟`],
['Objects and Rules',`Network object|كيف تعرّف subnet لإعادة استعمالها في القواعد؟|ما كائن IP group أو شبكة؟
Service object|كيف تمثل TCP 443 في سياسة؟|ما كائن منفذ وبروتوكول؟
Rule order|قاعدة سماح لا تطابق بسبب قاعدة قبلها. ما السبب؟|ما تأثير ترتيب أول قاعدة مطابقة؟
NAT rule|كيف تنشر خادمًا داخليًا بعنوان عام؟|ما ترجمة عنوان الوجهة أو المصدر؟
Cleanup rule|كيف تتعامل مع مرور لم يطابق قواعد سابقة؟|ما قاعدة ختامية افتراضية؟`],
['Threat Prevention',`IPS|كيف تمنع نمط استغلال معروف على الشبكة؟|ما كشف ومنع intrusion signatures؟
Anti-Bot|كيف تكتشف اتصال جهاز بخادم C2؟|ما حماية botnet على Gateway؟
URL Filtering|كيف تقيد فئة مواقع غير مصرح بها؟|ما سياسة ويب بحسب URL category؟
Application Control|كيف تحد تطبيقًا بغض النظر عن المنفذ؟|ما تصنيف applications في القواعد؟
HTTPS Inspection|كيف تفحص مرور ويب مشفر بضوابط مناسبة؟|ما اعتراض TLS مع شهادة وثقة وسياسة؟`],
['Operations',`Logs|كيف تعرف القاعدة التي منعت اتصالًا؟|ما سجل قرار المرور في SmartConsole؟
High Availability|كيف تستمر الخدمة عند فشل Gateway؟|ما زوج أجهزة وتبديل حالة؟
Backup|ما الإجراء قبل تعديل واسع للسياسة؟|كيف تحفظ تهيئة الإدارة للاستعادة؟
Licensing|ميزة threat prevention لا تفعل. ما تفحص؟|ما صلاحية ترخيص المنتج؟
Time synchronization|سجلات Gateway وManagement مختلفة التوقيت. ما تصحح؟|ما NTP للربط الزمني؟`]
]},
{id:'check-point-ccse',name:'Check Point CCSE',minutes:120,groups:[
['Advanced Management',`Multi-Domain Management|كيف تفصل إدارة سياسات عملاء عدة مركزيًا؟|ما إدارة عدة domains مستقلة؟
Policy layers|كيف تفصل قواعد عامة عن قواعد قسم محدد؟|ما طبقات access control المتتابعة؟
API automation|كيف تنشئ كائنات وقواعد برمجيًا؟|ما واجهة إدارة Check Point؟
Revision control|كيف تقارن policy قبل وبعد نشر؟|ما تاريخ جلسات الإدارة والتغييرات؟
Role-based admin|كيف تسمح لمسؤول بتعديل نطاق محدود؟|ما أدوار وصلاحيات الإدارة؟`],
['VPN and Routing',`Site-to-site VPN|كيف تشفر مرور فرعين عبر Internet؟|ما نفق IPsec بين Gateways؟
IKE negotiation|الـVPN لا تقوم. ما مرحلة تفاوض مفاتيح تراجع؟|ما هوية وسياسات تشفير الطرفين؟
Route-based VPN|كيف توجه حركة عبر واجهة tunnel منطقية؟|ما تصميم VTI للـVPN؟
BGP|كيف تتبادل prefixes عبر الاتصال الهجين؟|ما بروتوكول إعلان مسارات ديناميكي؟
NAT exemption|حركة VPN تُترجم خطأ. ما الضبط؟|ما استثناء NAT للمرور المشفر؟`],
['Advanced Threat',`Threat Prevention profile|كيف تجمع IPS وAnti-Bot وAnti-Virus في سياسة؟|ما ملف إعداد منع التهديدات؟
Sandboxing|كيف تفحص ملفًا مجهولًا في بيئة معزولة؟|ما تحليل ديناميكي للمرفقات؟
HTTPS inspection exceptions|تطبيق يتعطل بعد فحص TLS. ما مراجعة؟|ما استثناء دقيق مع تحليل السبب؟
Identity Awareness|كيف تربط القاعدة بمستخدم ومجموعة؟|ما سياق هوية في policy؟
DLP|كيف تمنع نقل بيانات حساسة عبر قنوات محددة؟|ما منع تسرب بناء على المحتوى؟`],
['Troubleshooting HA',`ClusterXL|كيف يتحول Gateway عند فشل عضو؟|ما تقنية cluster وتزامن حالة؟
State sync|جلسات تنقطع عند failover. ما تفحص؟|ما مزامنة connection table بين الأعضاء؟
Packet capture|كيف ترى الطلب والرد على واجهات Gateway؟|ما دليل حزم لاستكشاف أعطال؟
Policy verification|سياسة جديدة نُشرت على عضو دون الآخر. ماذا تراجع؟|ما حالة install على جميع العقد؟
Performance counters|CPU مرتفعة مع drop. ما تجمع؟|ما مؤشرات تحميل وفحص وسعة الجدار؟`]
]},
{id:'isc2-sscp',name:'ISC2 SSCP',minutes:120,groups:[
['Access Controls',`RBAC|كيف تربط أذونات مستخدم بالدور؟|ما نموذج صلاحيات وفق الوظيفة؟
Least privilege|كيف تمنح حساب خدمة أقل وصول؟|ما مبدأ تقليل الأذونات؟
MFA|كيف تقلل خطر كلمة مرور مسروقة؟|ما مصادقة بعامل إضافي؟
Account lifecycle|موظف غادر. ماذا تفعل بحساباته؟|ما deprovisioning للجلسات والصلاحيات؟
Separation of duties|كيف تمنع شخصًا من تنفيذ واعتماد عملية؟|ما فصل مسؤوليات متعارضة؟`],
['Security Operations',`Patch management|كيف تغلق ثغرات معروفة بتغيير منظم؟|ما تحديث واختبار أنظمة دوري؟
Vulnerability scan|كيف تكشف خدمات وتحديثات مفقودة؟|ما فحص آلي للضعف؟
Baseline|كيف تعرف أن config انحرفت عن معيار؟|ما حالة آمنة مرجعية؟
Log monitoring|كيف تكتشف نمط دخول فاشل؟|ما جمع وتحليل أحداث الأمن؟
Backup test|كيف تتأكد من إمكانية استعادة البيانات؟|ما اختبار restore دوري؟`],
['Incident and Risk',`Containment|جهاز مصاب ينتشر منه malware. ما البداية؟|ما عزل للحد من الامتداد؟
Evidence preservation|قبل تنظيف جهاز، ماذا تحفظ؟|ما سجلات وذاكرة وبصمات؟
Risk assessment|كيف توازن احتمال التهديد مع أثره؟|ما تقدير خطر الأصل؟
BIA|أي خدمات تستعيد أولًا بعد كارثة؟|ما تحليل أثر توقف الأعمال؟
Lessons learned|كيف تمنع تكرار حادثة بعد إغلاقها؟|ما مراجعة سبب الجذر وتحسين الضوابط؟`],
['Network and Crypto',`TLS|كيف تحمي اتصال تطبيق ويب أثناء النقل؟|ما بروتوكول تشفير جلسة؟
VPN|كيف تربط موظفًا بعيدًا عبر قناة آمنة؟|ما نفق مشفر للشبكة؟
Firewall|كيف تمنع مرور منفذ غير مخول؟|ما تحكم مرور بين مناطق؟
IDS|كيف تنبه لنمط تسلل دون إسقاط مباشر؟|ما كشف نشاط مريب؟
Key rotation|كيف تقلل مدة استخدام مفتاح تسرب محتمل؟|ما تدوير أسرار دوري؟`]
]},
{id:'isc2-cissp',name:'ISC2 CISSP',minutes:120,groups:[
['Governance',`Risk appetite|من يحدد مقدار المخاطر المقبول؟|ما حد حوكمة تتبناه الإدارة؟
Due diligence|كيف تفحص موردًا قبل التعاقد؟|ما تقييم مسبق للمخاطر والضوابط؟
Data classification|كيف تحدد معاملة ملف سري؟|ما وسم حساسية المعلومات؟
Security policy|كيف تحول أهداف الإدارة إلى قواعد إلزامية؟|ما وثيقة عليا للتوجيه الأمني؟
BIA|كيف ترتب عمليات المؤسسة في التعافي؟|ما تحليل أثر الانقطاع؟`],
['Architecture',`Defense in depth|كيف تقلل أثر فشل ضابط واحد؟|ما طبقات حماية مستقلة؟
Zero trust|لماذا لا يكفي وجود مستخدم داخل LAN؟|ما تحقق لكل طلب مع أقل امتياز؟
Threat modeling|كيف تحد مسارات هجوم قبل بناء تطبيق؟|ما تحليل أصول وحدود ثقة؟
High availability|خدمة هوية تتوقف بسقوط عقدة. ما التصميم؟|ما تكرار واستمرارية لمكوّن حرج؟
Secure defaults|ما الحالة الأولية للخدمة الجديدة؟|ما إعداد يرفض غير المطلوب افتراضيًا؟`],
['IAM and Assessment',`Least privilege|كيف تمنح صلاحية مهمة محددة فقط؟|ما تقليل أذونات المستخدم؟
PAM|كيف تضبط حسابات مسؤولي الأنظمة؟|ما إدارة وصول مميز ومراقبته؟
Access review|كيف تزيل تراكم صلاحيات قديمة؟|ما مراجعة دورية للحقوق؟
Penetration test|كيف تختبر قابلية استغلال ضعف بتفويض؟|ما محاكاة هجوم ضمن نطاق؟
Audit|كيف تتحقق من التزام الضوابط بمعيار؟|ما فحص مستقل للأدلة والعملية؟`],
['Operations and SDLC',`Incident response|كيف تنسق كشفًا واحتواءً وتعافيًا؟|ما خطة إدارة حادثة؟
Change management|كيف تقلل أثر تعديل بنية إنتاج؟|ما موافقة واختبار وخطة رجوع؟
Secure SDLC|كيف تدمج أمنًا في مراحل التطبيق؟|ما threat modeling وفحص ومراجعة قبل النشر؟
RTO/RPO|كيف تصف متطلبات تعافي زمن وبيانات؟|ما هدفا العودة وفقد البيانات؟
Lessons learned|بعد حادث، ما تحسين البرنامج؟|ما تحليل سبب الجذر والإجراءات التصحيحية؟`]
]},
{id:'isc2-ccsp',name:'ISC2 CCSP',minutes:120,groups:[
['Cloud Concepts',`Shared responsibility|من يحمي هوية العملاء وبياناتهم؟|ما تقسيم التزامات المزود والمستأجر؟
IaaS|عميل يدير OS على VM. ما النموذج؟|ما بنية افتراضية مستضافة؟
PaaS|عميل ينشر تطبيقًا دون إدارة OS. ما النموذج؟|ما منصة تطبيق مُدارة؟
SaaS|مستخدم يستعمل بريدًا جاهزًا. ما النموذج؟|ما تطبيق يوفره المزود؟
Multi-tenancy|كيف تعزل موارد عملاء على بنية مشتركة؟|ما فصل منطقي بين المستأجرين؟`],
['Data Security',`Data classification|كيف تحد سياسة بيانات مالية؟|ما تصنيف حساسية المعلومات؟
Encryption at rest|كيف تحمي أقراص تخزين في cloud؟|ما تشفير بيانات ساكنة؟
Key management|من يحتفظ بمفاتيح تشفير العميل؟|ما دورة حياة وتدوير مفاتيح؟
Data residency|لماذا تختار Region محددة لبيانات مواطنين؟|ما قيود موقع تخزين ومعالجة؟
DLP|كيف تمنع رفع ملف سري إلى خدمة غير معتمدة؟|ما منع تسرب محتوى حساس؟`],
['Platform and Apps',`IAM federation|كيف يستخدم موظف هوية الشركة للدخول للسحابة؟|ما اتحاد هوية عبر بروتوكول موثوق؟
CASB|كيف ترى استخدام SaaS وتطبق سياسة؟|ما وسيط أمن وصول للسحابة؟
Secure SDLC|كيف تختبر API قبل النشر؟|ما إدماج أمن في تطوير البرمجيات؟
Container isolation|كيف تقلل امتياز workload مشتركة؟|ما حدود namespace وصلاحيات الحاوية؟
API security|كيف تحمي endpoint عام من إساءة الاستعمال؟|ما مصادقة وتفويض وحد معدل؟`],
['Operations and Legal',`Cloud audit logs|من غيّر سياسة bucket؟|ما سجل API activity للمورد؟
Incident plan|مورد تسربت بياناته. كيف تصعّد مع المزود؟|ما مسؤوليات استجابة مشتركة؟
BCP|كيف تستمر العمليات عند فشل منطقة؟|ما خطة استمرارية متعددة المواقع؟
Contract SLA|ما الذي يحدد التزام توافر المزود؟|ما اتفاق مستوى خدمة وشروطه؟
Exit strategy|كيف تنقل البيانات لمزود آخر بلا فقد؟|ما خطة خروج وقابلية نقل؟`]
]},
{id:'isc2-cgrc',name:'ISC2 CGRC',minutes:120,groups:[
['Governance',`Risk appetite|ما الحد الذي تقبل به المؤسسة من خطر؟|ما قرار قيادة يوجه تحمل المخاطر؟
Policy framework|كيف توثق متطلبات الأمن العليا؟|ما سياسة ومعايير وإجراءات مترابطة؟
Asset inventory|قبل التقييم، ماذا تحصر؟|ما جرد أنظمة وبيانات ومالكين؟
Data classification|كيف تحد أثر تسرب قاعدة بيانات؟|ما تصنيف حساسية وأهمية المعلومات؟
Roles and responsibility|من يعتمد خطرًا متبقيًا؟|ما تفويض صاحب القرار المناسب؟`],
['Risk Assessment',`Threat analysis|ما مصادر الهجوم المحتملة على نظام؟|ما تحديد خصم وقدرة ونية؟
Vulnerability assessment|أين توجد نقاط ضعف قابلة للاستغلال؟|ما فحص ضوابط وثغرات؟
Likelihood|كيف تقدر احتمال وقوع سيناريو؟|ما مكوّن فرصة حدوث خطر؟
Impact|ما خسارة العمل إذا وقع الحدث؟|ما أثر مالي وتشغيلي وتنظيمي؟
Risk register|كيف تتابع المخاطر ومالكيها وقراراتها؟|ما سجل تقييم ومعالجة؟`],
['Controls',`Control selection|كيف تختار ضوابط تناسب خطرًا؟|ما ربط متطلبات النظام بوسائل الحماية؟
Control implementation|بعد اختيار MFA، ما الخطوة؟|ما تطبيق الضابط على النظام فعليًا؟
Control assessment|كيف تثبت أن MFA يعمل؟|ما اختبار أدلة وفاعلية ضابط؟
Compensating control|تحديث غير ممكن. ما بديل مؤقت؟|ما عزل ومراقبة يخفف خطرًا؟
Continuous monitoring|كيف تراقب تغير المخاطر بعد الاعتماد؟|ما قياس دوري وانحراف ضوابط؟`],
['Authorization and Compliance',`System boundary|كيف تحد ما يدخل في التقييم؟|ما نطاق مكونات وواجهات النظام؟
Security plan|أين تصف الضوابط ومسؤولياتها؟|ما وثيقة تنفيذ حماية النظام؟
POA&M|كيف تتابع عيوبًا لم تعالج بعد؟|ما خطة إجراء ومواعيد ومسؤوليات؟
Authorization decision|متى يسمح بتشغيل نظام مع خطر متبقٍ؟|ما موافقة موثقة من صاحب السلطة؟
Audit evidence|كيف تثبت الالتزام لمراجع خارجي؟|ما سجلات واختبارات قابلة للتحقق؟`]
]},
{id:'ec-ceh',name:'EC-Council CEH',minutes:120,groups:[
['Reconnaissance',`OSINT|كيف تجمع معلومات عامة دون لمس الهدف مباشرة؟|ما بحث علني عن نطاقات وموظفين؟
DNS enumeration|كيف تكتشف أسماء فرعية ضمن التفويض؟|ما جمع سجلات DNS لسطح الهجوم؟
Port scanning|كيف تحدد الخدمات المفتوحة ضمن النطاق؟|ما فحص منافذ TCP/UDP مصرح به؟
Service fingerprinting|منفذ مفتوح؛ كيف تعرف المنتج والإصدار؟|ما تحليل banner وسلوك البروتوكول؟
Scope verification|وجدت عنوانًا مرتبطًا بالشركة خارج العقد. ماذا تفعل؟|ما تأكيد التفويض قبل أي فحص؟`],
['Vulnerability and Exploitation',`Vulnerability validation|ماسح قال SQL injection. ما الخطوة الآمنة؟|كيف تثبت finding بتجربة محدودة؟
SQL injection|إدخال مستخدم يُدمج في استعلام دون parameterization. ما الخطر؟|ما حقن أوامر داخل SQL؟
XSS|قيمة تظهر في HTML دون encoding. ما الخطر؟|ما تنفيذ script في متصفح ضحية؟
Privilege escalation|وصول مستخدم عادي تحول إلى admin. ما السلوك؟|ما رفع الامتيازات بعد الدخول؟
Least impact PoC|ثغرة قد تحذف قاعدة. كيف تثبتها؟|ما دليل محدود لا يتلف الإنتاج؟`],
['Network and Wireless',`ARP spoofing|كيف ينتحل مهاجم عنوان gateway داخل LAN؟|ما تلويث ربط IP بـMAC؟
MITM|طرف يعترض ويعدل اتصالين. ما الهجوم؟|ما اعتراض وسيط بين عميل وخادم؟
Rogue AP|نقطة Wi-Fi غير مصرح بها في المكتب. ما التصنيف؟|ما نقطة لاسلكية خارج الإدارة؟
WPA3|ما معيار حديث لحماية WLAN؟|ما مصادقة وتشفير لاسلكي أحدث؟
Segmentation|كيف تحد lateral movement بين أقسام؟|ما حدود VLAN/ACL بين الشبكات؟`],
['Reporting and Defense',`Rules of engagement|كيف تحدد نطاق وتوقيت وتقنيات الاختبار؟|ما وثيقة حدود التفويض؟
Evidence handling|عثرت على credential. كيف تحفظه؟|ما تخزين مشفر ومشاركة محدودة؟
Remediation|بعد finding، ماذا تقدم للفريق؟|ما إجراء إصلاح قابل للتحقق؟
Retest|أُعلن إصلاح ثغرة. ماذا تفعل؟|ما إعادة اختبار بعد التعديل؟
Executive summary|كيف تشرح أثر الثغرات للإدارة؟|ما مخاطر أعمال وأولويات دون تفاصيل تشغيلية زائدة؟`]
]},
{id:'ec-cnd',name:'EC-Council CND',minutes:120,groups:[
['Network Defense',`Defense in depth|كيف تقلل أثر فشل firewall واحد؟|ما طبقات حماية متعددة؟
Segmentation|كيف تمنع وصول الضيوف لخوادم الإنتاج؟|ما فصل شبكات بسياسات محددة؟
Least privilege|كيف تقيد وصول مسؤول شبكات لمهامه فقط؟|ما صلاحية محدودة وفق الدور؟
Zero trust|هل الجهاز داخل LAN موثوق تلقائيًا؟|ما تحقق هوية وجهاز لكل طلب؟
Secure baseline|كيف تراجع تهيئة سويتش جديد؟|ما معيار ضبط آمن مرجعي؟`],
['Monitoring',`IDS|كيف تتلقى إنذار هجوم دون إسقاط الحركة؟|ما كشف intrusion على الشبكة؟
IPS|كيف توقف نمط استغلال معروف inline؟|ما منع هجوم أثناء المرور؟
NetFlow|كيف تعرف أكبر مصدر خروج بيانات؟|ما metadata تدفقات عنوان ومنفذ وحجم؟
SIEM|كيف تربط firewall وDNS وendpoint logs؟|ما منصة تحليل أحداث مركزية؟
Packet capture|كيف ترى TCP handshake لتشخيص انقطاع؟|ما التقاط حزم على منفذ؟`],
['Hardening',`Patch management|كيف تغلق ثغرات أجهزة الشبكة؟|ما تحديثات مجدولة مختبرة؟
AAA|كيف توحد هوية ومسؤوليات دخول الإداريين؟|ما Authentication Authorization Accounting؟
MFA|كيف تحمي VPN من سرقة كلمة المرور؟|ما عامل تحقق إضافي؟
Config backup|كيف ترجع بعد تغيير خاطئ؟|ما نسخة تهيئة موثوقة للسويتشات؟
Management plane isolation|كيف تمنع مستخدمًا عاديًا من الوصول إلى SSH الإدارة؟|ما شبكة إدارة وACL مخصصة؟`],
['Incident and Continuity',`Containment|هجوم ينتشر بين شبكات. ما إجراء أول؟|ما عزل نطاق مصاب دون تعطيل عام؟
BIA|أي خدمات تعيد أولًا بعد توقف WAN؟|ما تحليل أثر الأعمال؟
RTO|كم يسمح بتوقف خدمة حرجة؟|ما هدف زمن استعادة؟
RPO|كم بيانات تقبل فقدها بعد فشل؟|ما نقطة استعادة مستهدفة؟
Lessons learned|بعد هجوم، ما الذي تحدّثه؟|ما قواعد وإجراءات لمنع التكرار؟`]
]},
{id:'ec-chfi',name:'EC-Council CHFI',minutes:120,groups:[
['Evidence Collection',`Chain of custody|كيف تثبت من استلم قرصًا ومتى؟|ما سجل انتقال الدليل؟
Write blocker|كيف تمنع تغيير أصل القرص أثناء تصويره؟|ما أداة منع الكتابة على الدليل؟
Forensic image|كيف تنشئ نسخة بتات كاملة للتحليل؟|ما صورة جنائية لا مجرد نسخ ملفات؟
Hash verification|كيف تثبت سلامة النسخة؟|ما مقارنة SHA-256 قبل وبعد النقل؟
Volatile evidence|قبل إغلاق خادم مشتبه، ماذا تجمع؟|ما ذاكرة واتصالات قيد التشغيل؟`],
['Host Forensics',`File metadata|كيف تعرف وقت إنشاء وتعديل مستند؟|ما خصائص timestamp للملف؟
Deleted file recovery|ملف حذف دون overwrite. ما محاولة؟|ما استعادة من مساحة غير مخصصة؟
Registry artifact|كيف تعرف برنامجًا بدأ تلقائيًا في Windows؟|ما مفاتيح Run أو خدمات؟
Browser history|كيف تتبع تنزيل ملف خبيث؟|ما سجلات زيارة وتنزيل من المتصفح؟
Timeline|كيف ترتب أحداث أنظمة مختلفة؟|ما توحيد توقيت وتحليل تسلسل؟`],
['Network and Mobile',`PCAP|كيف تثبت اتصالًا بعنوان C2 أثناء الحادث؟|ما دليل حزم الشبكة؟
DNS logs|كيف ترى نطاقات بحثها الجهاز؟|ما سجل استعلامات حل الأسماء؟
Email headers|كيف تتحقق من مسار رسالة phishing؟|ما رؤوس Received وSPF/DKIM؟
Mobile backup|كيف تحفظ بيانات هاتف ضمن إذن التحقيق؟|ما نسخة جنائية مع توثيق الطريقة؟
Cloud audit logs|من نزّل ملفًا من bucket؟|ما سجلات نشاط API السحابية؟`],
['Reporting',`Scope authorization|قبل تحليل جهاز شخصي، ما المطلوب؟|ما تفويض ونطاق قانوني موثق؟
Evidence integrity|لماذا تعمل على نسخة لا الأصل؟|كيف تمنع تغيير الدليل الأساسي؟
Findings correlation|كيف تربط process وDNS وملفًا خبيثًا؟|ما جمع آثار متعددة لاستنتاج واحد؟
Reproducibility|كيف تجعل تقريرك قابلًا للمراجعة؟|ما خطوات وأدوات وبصمات ونتائج موثقة؟
Executive report|كيف توضح أثر حادث للإدارة؟|ما نطاق وسبب واحتمال فقد وتوصيات؟`]
]},
{id:'giac-gsec',name:'GIAC GSEC',minutes:120,groups:[
['Access and Crypto',`MFA|كيف تحمي حسابًا من كلمة مرور مسروقة؟|ما عامل مصادقة مستقل؟
Least privilege|حساب يحتاج قراءة logs فقط. ما الصلاحية؟|ما تقليل أذونات العمل؟
TLS|كيف تحمي HTTP أثناء النقل؟|ما بروتوكول تشفير جلسة ويب؟
Hashing|كيف تتحقق من سلامة ملف دون كشف محتواه؟|ما بصمة أحادية الاتجاه؟
Key rotation|كيف تحد مدة استخدام سر؟|ما تدوير مفاتيح دوري؟`],
['System Security',`Patch management|كيف تعالج ثغرة OS منشورة؟|ما تحديث مختبر ومجدول؟
EDR|كيف ترى عملية خبيثة وتعزل الجهاز؟|ما كشف واستجابة endpoint؟
Container hardening|كيف تحد صلاحيات حاوية إنتاج؟|ما تشغيل دون root وقدرات محدودة؟
Backup restore test|كيف تتأكد من نسخة احتياطية؟|ما تجربة استعادة دورية؟
Secure baseline|كيف تكتشف انحراف config؟|ما معيار أمني تقارن به؟`],
['Network Security',`Firewall|كيف تمنع منفذًا غير مصرح؟|ما سياسة تصفية مرور؟
IDS|كيف ترصد نمط هجوم دون إسقاط؟|ما كشف intrusion؟
VPN|كيف تحمي اتصال فرع عبر الإنترنت؟|ما نفق مشفر؟
DNS security|كيف تمنع حل نطاق خبيث؟|ما تصفية طلبات الأسماء؟
Segmentation|كيف تحد حركة lateral؟|ما فصل أقسام الشبكة بسياسة؟`],
['Incident and Assessment',`Vulnerability scanning|كيف تحدد تحديثات وخدمات ضعيفة؟|ما فحص آلي للأصول؟
Risk ranking|ثغرتان بنفس الدرجة؛ أيهما أولًا؟|ما تقدير تعرض وأثر واستغلال؟
Containment|malware ينتشر. ما إجراء فوري؟|ما عزل مصاب لمنع الامتداد؟
Evidence preservation|قبل إعادة تثبيت جهاز، ماذا تحفظ؟|ما سجلات وذاكرة وبصمات؟
Lessons learned|كيف تمنع تكرار نفس الحادث؟|ما مراجعة سبب الجذر وتحسينات؟`]
]},
{id:'giac-gcih',name:'GIAC GCIH',minutes:120,groups:[
['Attack Detection',`Phishing analysis|رسالة تنتحل الدعم بمرفق. ما التحقق؟|كيف تراجع headers والرابط دون تشغيل خطر؟
Password spray|محاولات قليلة على حسابات كثيرة. ما السلوك؟|ما هجوم كلمات مرور واسعة لتجنب قفل حساب؟
Web shell|خادم ويب يشغّل أوامر نظام من HTTP. ما الاشتباه؟|ما باب خلفي عبر تطبيق ويب؟
C2 beacon|اتصال دوري صغير لخارج الشبكة. ما الفرضية؟|ما نمط command-and-control منتظم؟
Lateral movement|حساب واحد ينتقل إلى عدة خوادم. ما السلوك؟|ما حركة بين أنظمة بعد دخول أولي؟`],
['Incident Handling',`Triage|100 تنبيه بعد ساعة. كيف ترتب؟|ما فرز حسب أثر وثقة الأصل؟
Containment|خادم مصاب ينشر نشاطًا. ما الحد؟|ما عزل مدروس مع بقاء دليل؟
Eradication|بعد الاحتواء، ماذا تزيل؟|ما malware وآلية بقاء وثغرة دخول؟
Recovery|كيف تعيد الخدمة بثقة؟|ما استعادة نظيفة ومراقبة؟
Lessons learned|ما مخرج ما بعد الحادث؟|ما تحسين كشف وإجراءات وسبب جذر؟`],
['Evidence',`Memory capture|قبل إطفاء endpoint مشتبه، ماذا تجمع؟|ما بيانات متطايرة؟
Process tree|كيف تفسر Word شغّل PowerShell؟|ما علاقة parent-child للعمليات؟
Network pcap|كيف تؤكد اتصالًا بمضيف C2؟|ما سجل حزم تفصيلي؟
Timeline|كيف ترتب سجلات متعددة؟|ما تطبيع وقت الأحداث؟
Chain of custody|دليل انتقل لفريق آخر. ماذا توثق؟|ما سجل حيازة وسلامة؟`],
['Defensive Improvements',`MFA|كيف تقلل نجاح password spray؟|ما عامل تحقق إضافي؟
Segmentation|كيف تحد اختراق فرع من الانتقال للمقر؟|ما حدود اتصال دقيقة؟
EDR detection|كيف تكشف persistence على endpoint؟|ما مراقبة عمليات وregistry وخدمات؟
WAF|كيف تقل هجمات تطبيق ويب الشائعة؟|ما فلتر HTTP مُدار؟
Detection rule tuning|إنذار إداري مشروع متكرر. ماذا تفعل؟|ما تضييق قاعدة دون إخفاء هجمات مشابهة؟`]
]},
{id:'giac-gcia',name:'GIAC GCIA',minutes:120,groups:[
['Packet Analysis',`TCP handshake|كيف ترى بدء اتصال سليم؟|ما SYN ثم SYN-ACK ثم ACK؟
TCP retransmission|تطبيق بطيء مع فقد حزم. ما دليل؟|ما إعادة إرسال segment بعد timeout؟
DNS query|كيف تعرف النطاق الذي طلبه endpoint؟|ما استعلام حل اسم في pcap؟
Fragmentation|حزم كبيرة تقسم في مسار MTU ضيق. ما الظاهرة؟|ما IP fragments لإعادة التجميع؟
TLS metadata|الحمولة مشفرة؛ ما الذي تراه؟|ما شهادات وSNI وأحجام وتوقيت؟`],
['Intrusion Detection',`Signature detection|كيف تكتشف نمط هجوم معروف؟|ما قاعدة IDS على bytes أو سلوك محدد؟
Anomaly detection|كيف ترصد حجم مرور خارج baseline؟|ما كشف انحراف عن طبيعي؟
False positive|تنبيه من فحص مخول. ما التصنيف؟|ما حدث يطابق القاعدة دون تهديد فعلي؟
Rule tuning|قاعدة تطلق آلاف تنبيهات غير مفيدة. ما الإصلاح؟|ما تضييق المصدر والسياق مع اختبار؟
Sensor placement|أين تضع IDS لرؤية حركة حساسة؟|ما اختيار نقطة SPAN/TAP ومجال رؤيتها؟`],
['Protocols',`ARP spoofing|تغير MAC الخاص بالبوابة فجأة. ما احتمال؟|ما تلويث ربط IPv4 بـMAC؟
ICMP|كيف تختبر وصولًا محدودًا بأداة ping؟|ما بروتوكول رسائل التحكم؟
HTTP status|طلب 401 متكرر لتطبيق. ما دلالته؟|ما فشل مصادقة لطلب ويب؟
SSH|ما بروتوكول إدارة مشفر على منفذ 22؟|ما بديل Telnet آمن؟
SMB|ما بروتوكول مشاركة ملفات Windows؟|ما خدمة قد تظهر في lateral movement؟`],
['Threat Hunting',`NetFlow|كيف ترى تدفقًا دون payload؟|ما metadata مصدر/وجهة/حجم وزمن؟
Beacon timing|اتصال منتظم كل دقيقة. ما الاشتباه؟|ما نمط C2 دوري؟
Data exfiltration|خروج كبير لعنوان غير مألوف. ما الفرضية؟|ما نقل بيانات خارج المؤسسة؟
Correlation|كيف تربط DNS وproxy وEDR لنفس المضيف؟|ما تحليل أحداث متعددة المصادر؟
Evidence validation|هل يكفي IP مشبوه لحظر شبكة واسعة؟|ما تحقق سياق وثقة قبل الاستجابة؟`]
]},
{id:'giac-gpen',name:'GIAC GPEN',minutes:120,groups:[
['Planning',`Written authorization|عميل طلب فحص هاتفياً. ما تحتاج أولًا؟|ما تصريح مكتوب بنطاق الاختبار؟
Rules of engagement|كيف تحد الوقت والتقنيات المسموحة؟|ما وثيقة شروط التفاعل؟
Scope|ظهرت شبكة مرتبطة خارج العقد. ماذا تفعل؟|ما حدود أصول مخول اختبارها؟
Emergency contact|اختبار أدى لتوقف خدمة. كيف تصعّد؟|ما جهة طوارئ متفق عليها؟
Success criteria|كيف تعرف أن التقييم حقق الغرض؟|ما أهداف ومخرجات قابلة للفحص؟`],
['Recon and Scanning',`OSINT|كيف تجمع معلومات عامة دون لمس الهدف؟|ما استطلاع مصادر مفتوحة؟
Port scan|كيف تحدد خدمات ضمن نطاق؟|ما فحص منافذ مصرح؟
Enumeration|منفذ خدمة مفتوح؛ ماذا بعد؟|ما جمع إصدار ومستخدمي الخدمة المعروضين؟
Vulnerability validation|أداة تعلن ثغرة. ما التحقق؟|ما PoC محدود لتقليل false positive؟
Attack path|كيف تربط عدة نقاط ضعف للوصول لهدف؟|ما تحليل سلسلة الاستغلال المحتملة؟`],
['Controlled Testing',`Least impact PoC|ثغرة قد تغير قاعدة بيانات. كيف تثبتها؟|ما برهان محدود بلا إتلاف؟
Privilege escalation|حساب عادي أصبح admin. ما المصطلح؟|ما رفع صلاحيات بعد وصول أولي؟
Lateral movement|وصول من مضيف إلى آخر. ما السلوك؟|ما حركة عبر بيئة العميل؟
Credential handling|عثرت على سر حقيقي. ما سياسته؟|ما حفظ مشفر وإبلاغ وحذف وفق العقد؟
Persistence prohibition|هل تترك بابًا خلفيًا بعد الاختبار؟|ما منع آلية بقاء دون موافقة صريحة؟`],
['Reporting',`Reproducibility|كيف توثق finding تقنيًا؟|ما خطوات ودليل وإعدادات ونتيجة؟
Risk rating|ثغرة داخلية وأخرى عامة. كيف ترتب؟|ما أثر وتعريض واحتمال؟
Root cause|عدة أجهزة بها التهيئة الضعيفة نفسها. ماذا تذكر؟|ما قالب أو سياسة أصل الخلل؟
Retest|أُصلحت الثغرة. ماذا تفعل؟|ما إعادة تحقق بعد remediation؟
Executive summary|كيف تقدم النتيجة للإدارة؟|ما أثر أعمال وأولوية وخطة إصلاح؟`]
]},
{id:'giac-gwapt',name:'GIAC GWAPT',minutes:120,groups:[
['Web Mapping',`Proxy interception|كيف ترى وتعدل HTTP requests في مختبر مخول؟|ما وسيط اعتراض لاختبار تطبيق ويب؟
Crawler|كيف تكتشف مسارات وصفحات التطبيق؟|ما أداة تتبع الروابط تلقائيًا؟
Attack surface|كيف تحصر endpoints وparameters؟|ما جرد مدخلات ووظائف ويب؟
HTTP methods|API يقبل PUT غير مطلوب. ما تفحص؟|ما أفعال GET/POST/PUT/DELETE المسموحة؟
Auth flow|كيف تفهم رحلة تسجيل دخول متعددة الخطوات؟|ما تحليل redirect وcookies ورموز؟`],
['Authentication and Sessions',`Session fixation|معرف جلسة لا يتغير بعد login. ما الخطر؟|ما إعادة استخدام session ID معروف؟
Cookie flags|كيف تقلل سرقة cookie عبر script أو نقل مكشوف؟|ما HttpOnly وSecure وSameSite؟
MFA bypass|تطبيق يطلب عاملًا إضافيًا في UI فقط. ما الاختبار؟|ما تحقق server-side لكل خطوة؟
Broken access control|مستخدم يغير ID في URL ويرى ملف آخر. ما الخلل؟|ما IDOR أو تفويض مفقود؟
Password reset|كيف تختبر رمز إعادة تعيين كلمة مرور؟|ما انتهاء وصلاحية واستخدام واحد للرمز؟`],
['Injection',`SQL injection|مدخل يدمج في SQL نصًا. ما الخطر؟|ما تحكم غير مصرح في الاستعلام؟
XSS|نص مستخدم يعرض بلا output encoding. ما الخطر؟|ما تنفيذ JavaScript في متصفح آخر؟
CSRF|طلب تغيير بريد يقبل cookie دون anti-CSRF. ما الهجوم؟|ما تزوير طلب من موقع آخر؟
Command injection|مدخل يبنى في shell خام. ما الثغرة؟|ما تنفيذ أوامر نظام غير مقصودة؟
Path traversal|اسم ملف يقبل ../ للوصول خارج المجلد. ما الخلل؟|ما تجاوز مسار الملفات؟`],
['Testing and Reporting',`Fuzzing|كيف ترسل قيمًا حدية عديدة لاكتشاف معالجة خاطئة؟|ما اختبار مدخلات آلي متنوعة؟
CSP|كيف تحد مصادر script في المتصفح؟|ما Content Security Policy؟
Security headers|كيف تمنع iframe غير موثوق من تضمين الصفحة؟|ما frame-ancestors أو ضابط مشابه؟
Least-impact PoC|كيف تثبت ثغرة دون استخراج بيانات حقيقية؟|ما دليل آمن محدود النطاق؟
Retest|الفريق عالج XSS. ما التحقق؟|ما إعادة تجربة payload آمنة بعد الإصلاح؟`]
]}
];
for(const bank of SECURITY_NETWORK_BANKS){
 const questions=[];
 if(bank.groups.length!==4)throw Error('Four domains required: '+bank.id);
 for(const [topic,raw] of bank.groups){
  const rows=raw.trim().split('\n').map(line=>line.split('|').map(v=>v.trim()));
  if(rows.length!==5||rows.some(r=>r.length!==3))throw Error('Five concepts required: '+bank.id+'/'+topic);
  rows.forEach(([correct,scenario,followup],i)=>{
   [scenario,followup].forEach((text,variant)=>{
    const offsets=variant?[1,3,4]:[1,2,3];
    const options=[correct,...offsets.map(offset=>rows[(i+offset)%5][0])];
    if(new Set(options).size!==4)throw Error('Duplicate options '+bank.id);
    questions.push({topic,text,options,answer:0,why:`${correct} هو المفهوم المناسب للحالة المذكورة ضمن محور ${topic}.`});
   });
  });
 }
 if(questions.length!==40||new Set(questions.map(q=>q.text)).size!==40)throw Error('Invalid bank: '+bank.id);
 window.OMNITECH_EXAMS.push({id:bank.id,name:bank.name,track:'Diagnostic practice',minutes:bank.minutes,coverage:'20 مفهومًا بسيناريوهين لكل مفهوم',questions});
}
