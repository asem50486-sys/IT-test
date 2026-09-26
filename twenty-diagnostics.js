// Original condensed diagnostics: 20 distinct concepts, two application prompts each, per exam.
// Practice items are not official questions and are not difficulty calibrated.
const TWENTY=[
{id:'dccor-350-601',name:'Cisco DCCOR 350-601',minutes:120,groups:[
['Fabric Network',`VXLAN|تحتاج امتداد Layer 2 فوق underlay IP. ما التغليف؟|ما تقنية overlay التي تفصل عناوين النقل عن شبكات المستأجر؟
EVPN|كيف توزع معلومات MAC/IP بين VTEPs من دون flood شامل؟|ما control plane الشائع مع VXLAN fabric؟
VTEP|أي عقدة تغلف حركة tenant داخل VXLAN؟|ما طرف النفق الذي يربط VLAN المحلية بالـVNI؟
vPC|كيف تقدم وصلة مزدوجة لجهاز downstream عبر Nexus دون حجب STP؟|ما تقنية تجميع الوصلات عبر زوج Nexus منطقي؟
OSPF underlay|ما بروتوكول داخلي شائع لإعلان loopbacks وروابط leaf-spine؟|عندما لا تصل loopback الخاصة بـVTEP، أي مستوى توجيه تفحص؟`],
['Compute',`UCS Fabric Interconnect|ما نقطة الربط والإدارة للشاسيهات والخوادم في UCS؟|أي مكوّن يوحد حركة LAN وSAN نحو UCS؟
Service Profile|كيف تنقل هوية خادم وإعداداته إلى عتاد بديل؟|ما قالب هوية الخادم في UCS؟
vNIC|أي واجهة افتراضية تقدم اتصال Ethernet للخادم؟|لإضافة شبكة تشغيل افتراضية داخل UCS، ما نوع الواجهة؟
vHBA|أي واجهة افتراضية تستخدم للوصول إلى Fibre Channel SAN؟|عند غياب LUN من خادم UCS، أي واجهة SAN تراجع؟
Hypervisor|ما الطبقة التي تدير تشغيل عدة آلات افتراضية على خادم واحد؟|عند عزل VM عن العتاد، أي برنامج يدير الموارد؟`],
['Storage Network',`Fibre Channel zoning|كيف تقيد تواصل initiator مع target في SAN؟|ما ضابط الوصول على FC fabric بين HBA وstorage port؟
VSAN|كيف تفصل نطاقات Fibre Channel منطقيًا على نفس البنية؟|ما نظير VLAN في شبكة FC؟
FCoE|ما التقنية التي تحمل FC frames داخل Ethernet بلا فقد مناسب؟|أي حل يجمع SAN وLAN على Ethernet في UCS؟
NPIV|كيف يقدم منفذ واحد عدة هويات WWPN افتراضية؟|أي تقنية تسمح لعدة VMs بهويات FC مستقلة؟
LUN masking|كيف تخفي وحدة تخزين عن خادم غير مخول على جانب storage؟|ما ضابط الرؤية على المصفوفة بعد zoning؟`],
['Automation Security',`Cisco APIC|ما متحكم السياسات المركزي في ACI؟|أي واجهة تدير tenant وEPG وcontract في ACI؟
RESTCONF|ما واجهة HTTP لبيانات الأجهزة المبنية على YANG؟|عند استخدام PATCH لنموذج IOS XE، أي بروتوكول تستهدف؟
Ansible|ما الأداة ذات playbooks تصريحية لإدارة عشرات الأجهزة؟|كيف تنشر ضبط VLAN آليًا بمهام YAML؟
CoPP|كيف تحمي CPU الخاص بالسويتش من مرور مفرط إلى control plane؟|ما السياسة التي تحد packets الموجهة لمعالج Nexus؟
MACsec|كيف تشفر روابط Ethernet مباشرة بين الأجهزة؟|لمنع التنصت على وصلة Layer 2، أي تقنية مناسبة؟`]
]},
{id:'dcid-300-610',name:'Cisco DCID 300-610',minutes:90,groups:[
['Fabric Design',`Leaf-spine|ما طوبولوجيا توفر عدد قفزات متوقعًا بين racks؟|كيف تصمم fabric قابلة للتوسع الأفقي بين الخوادم؟
ECMP|كيف تستغل عدة مسارات متساوية بين leaf وspine؟|ما آلية توزيع التدفق عبر روابط routed متكافئة؟
VXLAN EVPN|كيف تصمم امتداد tenant عبر IP underlay مع control plane؟|ما نموذج overlay لتعدد المستأجرين في data center؟
Anycast gateway|كيف توفر بوابة موحدة للمضيف أينما انتقل بين leafs؟|أي تصميم يقلل hairpin عند تنقل VM داخل fabric؟
Failure domain|لماذا تفصل racks أو pods في التصميم؟|ما مفهوم التصميم الذي يحد أثر فشل واحد؟`],
['Network Services',`L3Out|كيف تصل ACI fabric بشبكة routed خارجية؟|أي عنصر ACI يعلن routes خارج fabric؟
Contract|كيف تحدد المرور المسموح بين EPGs؟|ما سياسة ACI التي تضبط اتصال مجموعتي endpoint؟
Bridge Domain|أين تحدد نطاق Layer 2 وsubnet في ACI؟|ما كائن ACI الذي يربط EPG بالشبكة الفرعية؟
Load balancer|كيف توزع طلبات تطبيق على عدة خوادم؟|ما عنصر خدمة يرفع توافر واجهة تطبيق؟
Firewall insertion|كيف تمرر حركة شرق وغرب مختارة عبر فحص أمني؟|ما نمط دمج جدار حماية في مسار service graph؟`],
['Compute Design',`UCS service profile|كيف تفصل هوية الخادم عن العتاد لتسهيل الاستبدال؟|أي مكوّن يحدد MAC وWWPN وإقلاع خادم UCS؟
Fabric redundancy|كيف تتجنب فشل Fabric Interconnect واحد؟|ما نمط A/B fabric لخوادم UCS؟
Boot from SAN|كيف تخزن نظام الخادم مركزيًا على LUN؟|أي تصميم يتيح نقل هوية خادم مع صورة إقلاعه؟
Resource overcommit|ما خطر تخصيص vCPU وRAM فوق السعة الفيزيائية؟|عند بطء VMs أثناء الذروة، أي سياسة تخصيص تفحص؟
GPU scheduling|كيف تخطط لاستيعاب مهام AI على مضيفات مشتركة؟|ما العامل الحاسم عند تصميم سعة خوادم inference؟`],
['SAN and Operations',`Zoning|كيف تقيد initiator-target visibility على FC fabric؟|ما طبقة السياسة على السويتش لحصر اتصال SAN؟
LUN masking|ما القيد على storage array لرؤية LUN من مضيف بعينه؟|بعد zoning، ما خطوة صلاحية التخزين الأخرى؟
Multipathing|كيف تستمر خدمة التخزين عند فشل HBA أو fabric؟|ما تصميم مسارين مستقلين إلى LUN؟
Telemetry|كيف تخطط لجمع حالة fabric بشكل مستمر؟|أي مصدر قياس يساعد capacity planning على الروابط؟
Rollback plan|ما الوثيقة الضرورية قبل تغيير واسع في data center؟|كيف تقلل زمن التعافي عند فشل نشر سياسة؟`]
]},
{id:'dcit-300-615',name:'Cisco DCIT 300-615',minutes:90,groups:[
['Network Troubleshooting',`Underlay reachability|VTEP لا تصل إلى VTEP أخرى. ما أول طبقة تفحص؟|قبل فحص EVPN، ما اتصال loopback الأساسي المطلوب؟
EVPN route|MAC معروفة محليًا لكن لا تظهر على leaf بعيد. ماذا تراجع؟|عند فشل إعلان endpoint، ما control-plane entry تفحص؟
VNI mapping|حركة VLAN صحيحة محليًا وتفشل عبر VXLAN. ما الربط المحتمل خطؤه؟|أي قيمة تربط segment المحلي بشبكة overlay؟
vPC consistency|وصلة downstream معلقة بعد تغيير Nexus. ما فحص الزوج؟|ما سبب تعليق عضو في vPC رغم link up؟
MTU|حزم صغيرة تعبر overlay والكبيرة تفشل. ما السبب المحتمل؟|أي ضبط underlay يجب أن يستوعب overhead VXLAN؟`],
['ACI Troubleshooting',`Endpoint learning|خادم غير ظاهر في APIC رغم وصلة up. ما تفحص؟|أي جدول يربط MAC بعنوان وموقع leaf؟
Contract resolution|EPG A تصل محليًا ولا تصل EPG B. أين تبدأ؟|أي سياسة بين المجموعتين قد تمنع الاتصال؟
Fault records|كيف تحدد سبب فشل نشر tenant من APIC؟|أين تراجع أحداث الصحة والإخفاق في fabric؟
L3Out routes|شبكات خارجية اختفت بعد تغيير border leaf. ما تفحص؟|أي عنصر يصدر BGP أو OSPF بين fabric والخارج؟
Domain binding|واجهة فعالة لكن EPG لا تستقبل VLAN. ما الربط المفقود؟|أي ارتباط بين EPG وphysical/VMM domain تفحص؟`],
['Compute Troubleshooting',`Service profile association|الخادم يعمل لكن هوية الشبكة القديمة مفقودة. ما تراجع؟|أي عملية ربط بين UCS blade وقالب هويته؟
vNIC pinning|VM لا تصل شبكة LAN عبر UCS بينما SAN يعمل. أين تتبع المسار؟|أي علاقة تربط vNIC بمسار uplink في Fabric Interconnect؟
Firmware compatibility|فشل خادم بعد ترقية مكونات UCS. ما فحص أول؟|أي توافق بين firmware وhardware يجب مراجعته؟
Hypervisor vSwitch|VM واحدة لا ترى VLAN على مضيف سليم. ما مستوى الفحص؟|ما عنصر المضيف الذي يربط vNIC الافتراضية بالـport group؟
CIMC logs|خادم لا يقلع رغم طاقة موجودة. ما سجل العتاد؟|أين تبحث عن أخطاء POST وخادم UCS؟`],
['Storage Troubleshooting',`FC zoning|الخادم لا يرى target بينما رابط FC up. ما policy تفحص؟|أي عزل في fabric يمنع WWPN من رؤية الآخر؟
LUN masking|target مرئي لكن LUN غير متاحة. ما إذن المصفوفة؟|ما تخصيص LUN للمضيف المطلوب؟
Multipath health|أداء LUN نصف المتوقع بعد فشل مسار. ما تراجع؟|أي طبقة تتأكد من توافر paths بين خادم ومصفوفة؟
FCoE DCB|تسقط إطارات SAN على Ethernet مزدحم. ما إعداد حاسم؟|أي فئة ضبط تساعد شبكة FCoE على نقل مناسب؟
Time correlation|سجلات APIC وUCS متناقضة زمنيًا. ما تصحح؟|ما الخدمة التي توحد وقت الأحداث في مكونات data center؟`]
]},
{id:'dcaci-300-620',name:'Cisco DCACI 300-620',minutes:90,groups:[
['ACI Policy',`Tenant|كيف تفصل سياسات عميلين على APIC؟|ما الحاوية العليا لVRFs وBDs وEPGs في ACI؟
VRF|كيف تفصل جداول التوجيه داخل tenant؟|ما سياق Layer 3 المنطقي في ACI؟
Bridge Domain|أين تحدد subnet وflooding behavior لمجموعة؟|ما نطاق Layer 2 الذي ترتبط به EPG؟
EPG|كيف تجمع endpoints بسياسة اتصال موحدة؟|ما العنصر الذي يطبق سياسة التطبيقات على الأجهزة؟
Contract|كيف تسمح TCP 443 بين مجموعتين وتمنع غيره؟|ما علاقة provider-consumer في ACI؟`],
['Fabric Access',`Physical domain|كيف تربط EPG بمنافذ bare metal وVLAN؟|ما المجال الذي يمثل موارد شبكة فعلية؟
VMM domain|كيف تتكامل ACI مع منصة virtualization؟|أي domain يربط EPG ببيئة hypervisor؟
AAEP|كيف تصل سياسات المنفذ بمجالات الشبكات المسموحة؟|ما كائن access policy الذي يربط interface policy groups بالدومين؟
Leaf interface profile|أين تحدد مجموعة منافذ leaf المستهدفة؟|أي policy profile يحدد selectors للمنافذ؟
Static path binding|كيف تثبت EPG على منفذ وVLAN محددين؟|ما نوع attachment لصندوق bare metal؟`],
['Routing and Services',`L3Out|كيف تعلن شبكة ACI إلى الراوتر الخارجي؟|ما كائن الربط بين fabric وشبكات IP خارجية؟
External EPG|كيف تصنف prefixes خارجية لتطبيق contract؟|ما تمثيل المصادر الخارجية في سياسة ACI؟
BGP peer|ما علاقة التوجيه مع مزود خارج fabric؟|أي جلسة إعلان routes مع border leaf؟
Service graph|كيف تدرج جدار حماية بين EPGs؟|ما آلية ربط خدمات L4-L7 بسياسة التطبيق؟
Anycast gateway|كيف توفر بوابة مشتركة للأجهزة عبر fabric؟|ما نمط بوابة يظل متاحًا عبر leafs؟`],
['Operations',`APIC faults|policy لم تُنشر على leaf. أين تبحث عن السبب؟|ما مصدر حالة الخطأ في واجهة APIC؟
Endpoint table|أين تتتبع موقع MAC/IPv4 داخل fabric؟|ما جدول تعلّم الأجهزة الذي يساعد في التشخيص؟
Health score|كيف تراقب تدهور fabric على مستوى عام؟|ما مؤشر APIC الملخص للحالة؟
REST API|كيف تنشئ contract آليًا بدل واجهة GUI؟|أي واجهة قابلة للبرمجة يوفرها APIC؟
Snapshot backup|ما الإجراء قبل تغيير سياسات واسعة؟|كيف تضمن استعادة إعدادات ACI عند فشل النشر؟`]
]},
{id:'dcai-300-640',name:'Cisco DCAI 300-640',minutes:90,groups:[
['AI Compute',`GPU accelerator|ما المكوّن الذي يسرع عمليات matrix في تدريب النماذج؟|عند تخطيط rack للـAI، أي معالج متوازٍ تحسب سعته؟
GPU memory|نموذج لا يتسع على بطاقة واحدة. أي مورد محدد؟|ما سعة محلية تقيد حجم batch أو النموذج؟
Inference workload|خدمة تنتج استجابة لنموذج مدرّب. ما نمط حملها؟|أي مرحلة تستخدم النموذج بعد التدريب في الإنتاج؟
Training workload|تحدث أوزان نموذج من dataset كبير. ما نوع الحمل؟|أي مرحلة تحتاج gradient computation والتكرارات؟
Power and cooling|Rack GPU جديد يتجاوز قدرة القاعة. ما أول اعتبار مرافق؟|ما المتطلبات الفيزيائية الحاسمة لكثافة GPU؟`],
['AI Networking',`High bandwidth fabric|تبادل gradients بطيء بين عشرات الخوادم. ما مجال التصميم؟|أي بنية شبكة تحتاج سعة عالية لعمال التدريب؟
Low latency|توقف العمال انتظارًا لاتصالات صغيرة متكررة. ما خاصية المسار؟|أي مؤشر يؤثر على زمن collective communications؟
RDMA|كيف تقلل نسخ CPU لنقل البيانات بين ذاكرات الخوادم؟|ما آلية الوصول المباشر عن بعد للذاكرة؟
ECN|تريد إشارة ازدحام مبكرة بدل إسقاط واسع. ما الآلية؟|أي وسم يساعد المرسل على خفض المعدل؟
QoS design|حركة تخزين وتدريب تتنافس على الوصلات. ماذا تصمم؟|كيف تخصص فئات مرور مناسبة للأحمال؟`],
['Storage and Data',`Parallel filesystem|عمال التدريب يحتاجون قراءة dataset واحد بسرعة. ما نمط التخزين؟|ما بنية ملفات موزعة ذات throughput مرتفع؟
Data locality|نقل عينات من قارة أخرى يبطئ التدريب. ما التحسين؟|أين تضع البيانات بالنسبة للعمال؟
Checkpoint|انقطع تدريب طويل. ما الذي يتيح الاستئناف؟|ما نسخة دورية للأوزان وحالة optimizer؟
Object storage|أين تحفظ datasets ونماذج بكميات كبيرة وAPI موحد؟|ما خدمة تخزين مناسبة للأجسام غير المهيكلة؟
Backup isolation|كيف تحمي checkpoints من حذف خاطئ أو ransomware؟|ما سياسة نسخ منفصلة عن صلاحيات التدريب؟`],
['Operations and Security',`Capacity planning|ما الذي تحدده قبل شراء مجموعة GPU؟|كيف تربط أحجام النماذج والتزامن بالشبكة والطاقة؟
Telemetry|كيف تقيس GPU utilization والشبكة والتخزين خلال التدريب؟|ما جمع القياسات المطلوب لتحليل bottleneck؟
Multi-tenant isolation|فريقان يشتركان في cluster AI. كيف تفصل مواردهما؟|ما الضبط الذي يمنع تسرب بيانات فريق لآخر؟
Model access control|كيف تقيد تنزيل أوزان نموذج حساس؟|ما سياسة هوية وصلاحية مستودع النماذج؟
Failure recovery|خادم GPU سقط أثناء تدريب موزع. ما خطة التشغيل؟|كيف تمنع فقد تقدم طويل مع فشل عقدة؟`]
]},
{id:'spcor-350-501',name:'Cisco SPCOR 350-501',minutes:120,groups:[
['Core Architecture',`IS-IS|ما بروتوكول IGP شائع في قلب مزود الخدمة؟|أي بروتوكول link-state يدعم IPv4/IPv6 في core؟
BGP|كيف تتبادل مسارات العملاء والإنترنت بين ASs؟|ما بروتوكول التحكم الرئيسي في inter-domain routing؟
MPLS label switching|كيف تمرر الحزم عبر core اعتمادًا على labels؟|ما مفهوم forwarding في MPLS؟
Segment Routing|كيف تحدد سلسلة segments للمسار دون LDP؟|ما بنية source routing لتوجيه المرور في core؟
ECMP|كيف تستغل عدة مسارات متساوية للسعة والتوافر؟|ما آلية توزيع التدفقات عبر next-hops متكافئة؟`],
['Services',`L3VPN|كيف تعزل جداول توجيه شركات مختلفة على PE؟|ما خدمة VPN تقدم VRF لكل عميل؟
EVPN|كيف تتبادل معلومات MAC/IP لخدمة Ethernet موزعة؟|ما control plane شائع لـL2VPN الحديثة؟
QoS|كيف تحفظ أولوية صوت العملاء وسط ازدحام core؟|ما إطار تصنيف وجدولة المرور؟
Multicast|كيف ترسل بثًا واحدًا لمجموعة مستلمين بفعالية؟|ما نموذج توجيه لحركة one-to-many؟
IPv6 transition|كيف تدعم عملاء IPv6 في core ما زال جزئيًا IPv4؟|ما تخطيط dual-stack أو tunneling المرحلي؟`],
['Automation Assurance',`Streaming telemetry|كيف تحصل على قياسات متتابعة دون SNMP polling مكثف؟|ما طريقة دفع مؤشرات core للمجمع؟
YANG model|ما وصف البيانات المنظم لواجهات وإعدادات الجهاز؟|أي مخطط يستخدمه NETCONF/RESTCONF؟
NETCONF|كيف تدير datastores بعمليات RPC مهيكلة؟|ما بروتوكول إدارة يعتمد XML وYANG؟
Source of truth|كيف تمنع تضارب بيانات العملاء والمواقع أثناء النشر؟|ما سجل الجرد المعتمد للأتمتة؟
Path validation|ما التحقق بعد تعديل سياسة BGP واسعة؟|كيف تثبت وصول prefixes وخدمة العملاء بعد النشر؟`],
['Security and Operations',`RPKI|كيف تتحقق من شرعية origin AS لإعلان IP؟|ما آلية تقلل قبول BGP hijack عبر ROA؟
Control plane policing|كيف تحمي معالج الراوتر من flood إلى خدمات التحكم؟|ما سياسة تحد مرور CPU في PE؟
Route filtering|كيف تمنع العميل من إعلان default route إلى core؟|ما سياسة قبول prefixes عند حدود BGP؟
BFD|كيف تكشف فشل مسار بسرعة بجوار بروتوكول التوجيه؟|ما جلسة keepalive سريعة لفشل forwarding؟
DDoS mitigation|كيف تقلل أثر هجوم حجمي على خدمات العميل؟|ما خطة امتصاص وتصفية حركة هجومية؟`]
]},
{id:'spri-300-510',name:'Cisco SPRI 300-510',minutes:90,groups:[
['Advanced IGP',`IS-IS level design|كيف تفصل نطاق توجيه access عن backbone؟|ما تقسيم L1/L2 في IS-IS؟
OSPF area design|كيف تقلل LSDB في فروع provider؟|ما تقسيم المناطق وتلخيص المسارات في OSPF؟
Route summarization|كيف تحد عدد prefixes عند الحدود؟|ما عملية تجميع شبكات متجاورة؟
BFD|IGP يتأخر في كشف سقوط نقل. ما الإضافة؟|ما آلية فحص اتصال سريع للجيران؟
Fast reroute|كيف تحول المرور محليًا قبل اكتمال convergence؟|ما تصميم حماية المسار الاحتياطي الفوري؟`],
['BGP Policy',`Local preference|تريد اختيار مخرج AS المفضل داخليًا. أي سمة؟|أي attribute ينتشر داخل AS لترجيح الخروج؟
AS path prepend|تريد التأثير على دخول حركة من الخارج بطريقة مرنة. ما الأداة؟|أي تعديل يطيل المسار المعلن عبر مزود معين؟
BGP communities|كيف توسّم routes لسياسات مشتركة عبر peers؟|ما الوسم الذي يربط إعلان route بإجراء؟
Route reflector|كيف تقلل full mesh iBGP داخل AS؟|ما مكوّن يعكس iBGP updates بين العملاء؟
Prefix filtering|كيف تمنع تسرب prefixes غير مصرح بها؟|ما قائمة مسارات مقبولة من عميل BGP؟`],
['MPLS and SR',`LDP|ما بروتوكول توزيع labels التقليدي مع IGP؟|ما جلسة تبادل FEC-label في MPLS؟
SR-MPLS|كيف توجه مسارًا بقائمة SIDs بدل LDP؟|ما تقنية segment routing على MPLS data plane؟
TI-LFA|كيف تحمي prefix بسرعة عند فشل رابط؟|ما آلية SR fast reroute مستقلة عن topology؟
Label stack|كيف تحمل هوية الخدمة ومسار النقل في packet؟|ما بنية عدة labels على حزمة MPLS؟
PHP|كيف يزيل الراوتر قبل الأخير transport label؟|ما معنى penultimate hop popping؟`],
['Troubleshooting',`Adjacency state|OSPF route مفقود بعد وصل جديد. ما أول فحص؟|أي علاقة جيران IGP يجب أن تصل Full؟
BGP next-hop|Prefix موجودة في BGP ولا تدخل RIB. ما السبب الشائع؟|أي قابلية وصول لعنوان next-hop تراجع؟
Route leak|ظهرت مسارات عميل في VRF خطأ. ما تفحص؟|أي import/export RT أو سياسة قد تسبب التسرب؟
Traceroute MPLS|كيف تحدد القفزة التي تفشل فيها حزمة خدمة؟|ما أداة تتبع مسار عبر core؟
Convergence baseline|كيف تقيس أثر تغيير IGP على الاستقرار؟|ما مقارنة زمن التعافي قبل وبعد التعديل؟`]
]},
{id:'spvi-300-515',name:'Cisco SPVI 300-515',minutes:90,groups:[
['L3VPN',`VRF|كيف تفصل جداول توجيه عميلين على PE واحد؟|ما سياق توجيه مستقل لخدمة L3VPN؟
Route distinguisher|كيف تجعل IPv4 prefixes متطابقة فريدة في VPNv4؟|ما قيمة تميز route لكل VRF؟
Route target|كيف تتحكم في import/export بين VRFs؟|ما community تحدد عضوية VPN؟
MP-BGP|كيف تنقل VPNv4 routes بين PE؟|ما امتداد BGP يحمل address families VPN؟
PE-CE routing|كيف يتبادل الراوتر الطرفي مسارات العميل؟|ما اتصال التوجيه بين provider edge وcustomer edge؟`],
['EVPN L2VPN',`EVPN type 2|كيف تعلن MAC/IP endpoint بين PEs؟|ما route type يحمل MAC/IP advertisement؟
EVPN type 5|كيف تعلن IP prefix دون الاعتماد على MAC؟|ما route type مخصص لـIP prefix؟
EVI|ما المجال المنطقي لخدمة EVPN؟|ما instance الذي يربط أطراف VPN Ethernet؟
Multihoming|كيف توصل CE إلى PEs اثنين للتوافر؟|ما تصميم ازدواج طرف Ethernet VPN؟
Split horizon|كيف تمنع loop بين أذرع L2VPN؟|ما قاعدة تمنع إعادة بث frame إلى مصدر VPN؟`],
['VPN Transport',`MPLS labels|ما الذي يفصل خدمة العميل عن نقل core؟|ما stack يحدد tunnel وVPN عند الاستقبال؟
SR policy|كيف تختار مسار نقل محدد لحركة VPN؟|ما سياسة steering عبر segments؟
Pseudowire|كيف تنقل خدمة Layer 2 point-to-point عبر MPLS؟|ما قناة افتراضية تصل منفذي عميل؟
BFD|كيف تراقب صحة مسار VPN سريعًا؟|ما جلسة كشف فشل data plane؟
QoS marking|كيف تحفظ درجة أولوية العميل عبر core؟|ما تصنيف المرور في VPN قبل جدولة الموارد؟`],
['Operations',`RT mismatch|VPN route ظاهرة على PE أول ولا تدخل VRF آخر. ماذا تفحص؟|ما سبب غياب import في L3VPN رغم BGP؟
RD collision|بادئتان متطابقتان ظهرتا كمسار واحد. ماذا تراجع؟|أي معرف يجعل عنواني عميلين فريدين؟
MTU overhead|حزم صغيرة تنجح والكبيرة تفشل عبر MPLS VPN. لماذا؟|ما حجم إضافي يجب احتسابه للـlabels؟
CE reachability|VRF لديها routes والعميل لا يصل. ما آخر فحص؟|أي اتصال بين PE وCE وACL يجب التحقق منه؟
Route leak validation|كيف تثبت عزل عميلين بعد تغيير RT؟|ما اختبار عدم الوصول بين VRFs إلا المصرح؟`]
]},
{id:'spcni-300-540',name:'Cisco SPCNI 300-540',minutes:90,groups:[
['Cloud Core Architecture',`Leaf-spine|كيف تبني مركز خدمات provider قابلًا للتوسع الأفقي؟|ما طوبولوجيا تقلل تباين القفزات؟
EVPN VXLAN|كيف تعزل مستأجرين عبر IP fabric مع MAC learning مهيكل؟|ما overlay/control plane لخدمات متعددة المستأجرين؟
Segment Routing|كيف تتحكم بمسارات خدمات cloud دون LDP؟|ما تقنية source routing بالـSIDs؟
ECMP|كيف تستخدم عدة وصلات متكافئة بين spine وleaf؟|ما توزيع التدفقات على مسارات متساوية؟
Anycast gateway|كيف توفر بوابة أقرب للأحمال المتنقلة؟|ما نمط IP gateway موحد عبر leafs؟`],
['Virtual Services',`NFV|كيف تشغّل وظائف شبكة كبرمجيات بدل أجهزة مخصصة؟|ما نمط firewall أو router افتراضي في cloud؟
Service chaining|كيف تمرر المرور عبر عدة وظائف افتراضية بالترتيب؟|ما طريقة ربط firewall ثم inspection ثم خدمة؟
Orchestration|كيف تنسق إنشاء وظائف متعددة ودورة حياتها؟|ما طبقة تنشر وتوسع الموارد الشبكية؟
Multi-tenancy|كيف تمنع مستأجرًا من رؤية مسارات آخر؟|ما فصل VRF والسياسة والموارد لكل عميل؟
Capacity planning|كيف تحدد سعة NFV قبل إضافة عملاء؟|ما قياس CPU والذاكرة والمرور المتوقع؟`],
['Interconnect and Security',`L3VPN|كيف تربط فرع عميل بمورد سحابي معزول؟|ما خدمة provider تقدم VRF للعميل؟
Private interconnect|متى تستخدم وصلة خاصة إلى cloud بدل الإنترنت؟|ما ربط يعطي مسارًا خاصًا متوقعًا؟
IPsec|كيف تشفر مرور مستأجر عبر underlay عام؟|ما tunnel يحمي البيانات بين المواقع؟
Route filtering|كيف تمنع cloud tenant من إعلان prefix غير مخول؟|ما سياسة BGP تحصر الشبكات المسموحة؟
DDoS protection|كيف تخطط لحركة هجومية حجمية على بوابة عامة؟|ما طبقة امتصاص وتصفية عند الحافة؟`],
['Automation and Assurance',`IaC|كيف تعيد إنشاء خدمة شبكية من تعريفات مراجعة؟|ما منهج تعريف البنية ككود؟
Source of truth|كيف تربط tenant بVRF وعناوينه بشكل موحد؟|ما قاعدة جرد معتمدة للأتمتة؟
Telemetry|كيف ترصد latency وloss في خدمات cloud؟|ما بث قياسات مستمر من الأجهزة؟
CI validation|كيف تمنع نشر سياسة غلط بعد تعديل YAML؟|ما مرحلة اختبارات ومراجعة قبل deploy؟
Failure testing|كيف تثبت أن service chain تتحمل سقوط عقدة؟|ما تجربة planned failover قبل قبول التصميم؟`]
]},
{id:'wlcor-350-101',name:'Cisco WLCOR 350-101',minutes:120,groups:[
['RF Foundations',`RSSI|كيف تقيس قوة الإشارة المستقبلة على جهاز؟|ما مؤشر قدرة الإشارة بالديسيبل؟
SNR|ما الفرق بين الإشارة والضوضاء الذي يؤثر على الجودة؟|أي مؤشر يحكم قدرة فك الترميز وسط الضجيج؟
Channel width|ما الإعداد الذي يرفع السرعة لكن قد يزيد التداخل؟|أي قرار 20/40/80 MHz يوازن السعة والتداخل؟
Co-channel interference|ما سبب بطء APs تستخدم القناة نفسها بقوة متداخلة؟|أي مشاركة قناة ترفع contention؟
DFS|لماذا قد يتغير AP من قناة 5GHz عند كشف رادار؟|ما آلية مشاركة الطيف مع الرادار؟`],
['Controllers and APs',`WLC|ما العنصر المركزي لإدارة SSIDs وAPs في البنية التقليدية؟|أين توزع سياسات WLAN على APs؟
CAPWAP|ما البروتوكول الذي يربط AP بالمتحكم؟|أي نفق تحكم وبيانات بين AP وWLC؟
FlexConnect|كيف يسمح AP فرع بتبديل محلي عند انقطاع WAN؟|ما وضع AP للفروع ذات خروج محلي؟
RF profile|كيف تعين خصائص راديو لمجموعة APs؟|أي سياسة تحد channel/power لمواقع متشابهة؟
AP group|كيف تعرض SSIDs مختلفة في مبنيين على نفس WLC؟|ما تجميع APs لتخصيص شبكات لاسلكية؟`],
['Security and Mobility',`802.1X|كيف تصادق مستخدم شركة عبر RADIUS قبل WLAN access؟|ما إطار EAP للمصادقة المؤسسية؟
WPA3 Enterprise|ما حماية لاسلكية مؤسسية حديثة؟|أي نمط تشفير WLAN مع هوية مؤسسية؟
Roaming|كيف ينتقل عميل بين APs مع استمرار الجلسة؟|ما عملية handoff داخل شبكة لاسلكية؟
Guest isolation|كيف تمنع زائرًا من الوصول إلى LAN؟|ما سياسة VLAN/ACL ضيف منفصل؟
PMF|كيف تحمي management frames من تزوير deauth؟|ما 802.11w لحماية إطارات الإدارة؟`],
['Operations',`Site survey|كيف تتحقق من تغطية وتداخل قبل نشر APs؟|ما قياس ميداني بدلاً من التخمين؟
Client troubleshooting|مستخدم متصل لكن لا DNS. ما نطاق الفحص؟|أي سلسلة association ثم DHCP ثم DNS ثم policy؟
RRM|كيف تعدل القنوات والقدرة ديناميكيًا؟|ما آلية radio resource management؟
Telemetry|كيف تكتشف ارتفاع retransmissions في موقع واحد؟|ما جمع مؤشرات العميل والراديو عبر الزمن؟
High availability|كيف تحافظ على WLAN عند فشل متحكم؟|ما تصميم WLC بديل واختبار انتقال؟`]
]},
{id:'wlsd-300-110',name:'Cisco WLSD 300-110',minutes:90,groups:[
['Requirements and Survey',`Predictive survey|كيف تقدر توزيع APs قبل زيارة موقع مبني على المخطط؟|ما تصميم أولي يستند إلى الجدران والمواد؟
Active survey|كيف تقيس throughput وتجربة عميل أثناء المسح؟|ما مسح يشترك فيه client مع الشبكة؟
Passive survey|كيف ترصد قنوات وRSSI دون اتصال بالشبكة؟|ما مسح يكتفي بالاستماع لإطارات RF؟
Capacity planning|قاعة بها 300 متدرب. ما العامل قبل حساب APs؟|ما تقدير عدد العملاء والحمل والتزامن؟
Coverage threshold|كيف تضع معيارًا للهاتف الصوتي عند حافة الخلية؟|ما حد RSSI/SNR المطلوب للخدمة؟`],
['RF Design',`Channel reuse|كيف توزع قنوات متباعدة بين APs المتجاورة؟|ما تصميم يقلل co-channel interference؟
Transmit power|تغطية كبيرة ترفع sticky clients. ماذا تضبط؟|ما إعداد خلية الراديو المؤثر على roaming؟
5GHz/6GHz planning|كيف تختار نطاقًا أقل ازدحامًا لسعة عالية مع دعم الأجهزة؟|أي تخطيط تردد يعتمد على قدرات العملاء؟
Antenna pattern|كيف تغطي ممرًا طويلًا دون تسرب واسع؟|ما شكل إشعاع تختاره بحسب شكل الموقع؟
Channel width|في مبنى كثيف، لماذا تفضل 20MHz أحيانًا؟|أي إعداد يوازن إعادة استخدام القنوات والسرعة؟`],
['Architecture and Security',`Controller placement|كيف تختار موضع WLC بالنسبة لفروع كثيرة؟|ما قرار يعتمد على الكمون والتوافر ومسار البيانات؟
FlexConnect|كيف تصمم خروجًا محليًا لفروع عند تعطل WAN؟|ما وضع AP يقلل الاعتماد على نفق البيانات للمقر؟
802.1X EAP-TLS|كيف تصمم مصادقة قائمة على شهادة جهاز؟|ما نمط هوية لاسلكية مؤسسي قوي؟
Guest segmentation|كيف تمنع حركة الضيوف إلى بيئة الشركة؟|ما تصميم VLAN/VRF وACL منفصل للضيف؟
Redundant WLC|كيف تحافظ على الخدمة عند سقوط متحكم؟|ما بنية إدارة بديلة للاعتمادية؟`],
['Validation and Operations',`Roaming test|كيف تثبت استمرار مكالمة أثناء انتقال بين APs؟|ما اختبار حركة عميل مع قياس فقد وزمن التحول؟
Spectrum analysis|كيف تحدد مصدر ضوضاء غير Wi-Fi؟|ما قياس RF يكشف تداخل أجهزة أخرى؟
Baseline|كيف تميز تدهور WLAN من ذروة طبيعية؟|ما قياسات مرجعية قبل وبعد النشر؟
PoE budget|لماذا تفحص قدرة سويتش قبل إضافة APs؟|ما مجموع طاقة المنافذ المطلوب لكل راديو؟
Acceptance criteria|متى تعتبر التصميم مقبولًا؟|ما حدود قابلة للقياس للتغطية والسعة والأمن؟`]
]},
{id:'wlsi-300-120',name:'Cisco WLSI 300-120',minutes:90,groups:[
['Advanced RF',`RRM|قنوات APs متجاورة تصطدم. ما آلية الضبط الآلي؟|ما نظام إدارة القناة والقدرة في WLAN؟
DFS event|AP غيّر قناته فجأة بعد رادار. ما سبب الحدث؟|ما ضابط طيف 5GHz المرتبط بالرادار؟
SNR|إشارة قوية مع ضجيج عال وأداء ضعيف. ما المقياس؟|ما فرق الإشارة والضوضاء الذي يفسر الأداء؟
Retransmission rate|مستخدم يفقد throughput مع ازدحام. ما مؤشر MAC؟|ما نسبة الإطارات المعاد إرسالها؟
Antenna alignment|وصلة directional بعيدة ضعيفة رغم القدرة. ما فحص مادي؟|ما توجيه الهوائي الذي يؤثر على الربط؟`],
['Deployment',`AP join|AP لا يظهر على WLC. ما سلسلة الفحص؟|أي DNS/DHCP والوصول والشهادة وCAPWAP تراجع؟
FlexConnect local switching|فرع يحتاج خروجًا محليًا عند فشل WAN. ما إعداد؟|ما نوع تبديل بيانات AP في فرع بعيد؟
WLAN policy profile|SSID يظهر لكن سياسة VLAN خاطئة. ما عنصر WLC؟|أي profile يربط WLAN بالتفويض والتحويل؟
High availability|متحكم أساسي يفشل. ما إعداد التوافر؟|كيف تضمن AP join إلى متحكم بديل؟
RF profile assignment|مجموعة APs تحتاج قدرة أقل. أين تحددها؟|ما ربط خصائص الراديو بمجموعة المواقع؟`],
['Mobility and Security',`Fast roaming|مكالمة تسقط عند الانتقال بين APs. ما ميزة تسريع المصادقة؟|ما آلية تقلل انقطاع roaming الحساس؟
802.1X debug|فشل EAP رغم association. أين ترى السبب؟|أي سجلات RADIUS/WLC تفحص؟
PMF|هجمات deauth متكررة. ما حماية إطار الإدارة؟|ما آلية تمنع تزوير management frames؟
Guest portal|زائر لا يرى صفحة الدخول. ماذا تفحص؟|أي redirect وDNS وشهادة وسياسة عميل؟
Client exclusion|عميل فشل عدة مصادقات ثم حُظر مؤقتًا. ما الحالة؟|أي آلية WLC تستبعد العميل لفترة؟`],
['Troubleshooting',`Packet capture|تريد رؤية DHCP Discover وOffer من عميل. ما الأداة؟|ما دليل طبقة الحزم لتشخيص الحصول على IP؟
Client timeline|عميل عانى مراحل join متقطعة. ما سجل مفيد؟|أي تسلسل association/auth/DHCP تتبع؟
Coverage validation|بعد تغيير AP، كيف تتحقق من المناطق الضعيفة؟|ما site survey بعد التنفيذ؟
Capacity bottleneck|RSSI جيد لكن airtime مرتفع. ماذا تراجع؟|ما مؤشر ازدحام القناة وعدد العملاء؟
Post-change test|نقلت SSID إلى VLAN أخرى. ما التحقق؟|كيف تختبر العنوان والوصول والقيود والتجوال؟`]
]},
{id:'cbrcor-350-201',name:'Cisco CBRCOR 350-201',minutes:120,groups:[
['Security Operations',`SIEM correlation|كيف تربط محاولات دخول وسجل endpoint وDNS في حادثة واحدة؟|ما تحليل أحداث متعدد المصادر؟
MITRE ATT&CK|كيف تصنف أسلوب lateral movement ضمن نمط هجومي؟|ما إطار تكتيكات وتقنيات الخصم؟
Triage|1000 تنبيه في الساعة؛ ما خطوة فرز أولى؟|ما ترتيب يعتمد على ثقة الإنذار وأثر الأصل؟
IOC|ما مثال عنوان نطاق أو hash مرتبط بحملة؟|ما مؤشر اختراق قابل للبحث؟
False positive|تنبيه يبدو خبيثًا لكنه سلوك إداري موثق. ما تصنيفه؟|ما نتيجة كشف صحيحة تقنيًا لكن غير تهديد فعلي؟`],
['Network and Endpoint',`NetFlow|كيف ترى من تحدث مع عنوان خارجي وحجم الحركة؟|ما سجل تدفقات الشبكة بلا payload؟
Packet capture|كيف تراجع handshake وDNS وحمولات مسموحة؟|ما مصدر تفاصيل الحزم عند التحقيق؟
EDR|كيف تعزل endpoint وتراجع process tree؟|ما منصة كشف واستجابة على الأجهزة؟
DNS logs|كيف تتبع استعلامات نطاق command-and-control؟|ما مصدر طلبات حل الأسماء؟
TLS metadata|حركة مشفرة لا تفكها. ما سياق اتصال يفيد؟|ما مؤشرات شهادة وSNI وزمن وحجم الاتصال؟`],
['Incident Response',`Containment|انتشر ملف خبيث بين أجهزة. ما خطوة منع الامتداد؟|ما عزل endpoints وحجب مؤشر بقرار موثق؟
Evidence preservation|قبل إعادة تثبيت جهاز مشتبه، ماذا تجمع؟|ما صور وذاكرة وسجلات وبصمات تحفظ الدليل؟
Eradication|بعد الاحتواء، ماذا تزيل؟|ما حذف آلية البقاء والثغرة والبرمجية الضارة؟
Recovery|بعد تنظيف النظام، ما المطلوب؟|ما إعادة خدمة تدريجية مع مراقبة؟
Lessons learned|كيف تمنع تكرار نفس الحادثة؟|ما مراجعة سبب الجذر والضوابط بعد الإغلاق؟`],
['Threat Intelligence',`STIX/TAXII|كيف تتبادل مؤشرات منظمة آليًا بين منصات؟|ما معيار وتمرير threat intelligence؟
TTP|ما يصف سلوك الخصم المستمر أكثر من IP عابر؟|ما تكتيكات وتقنيات وإجراءات المهاجم؟
Confidence score|مصدر ينشر IOC غير موثق. ما تقييمه؟|ما معيار ثقة قبل حظر واسع؟
Hunting hypothesis|كيف تبدأ بحثًا عن حركة lateral غير مكتشفة؟|ما فرضية قابلة للاختبار عبر telemetry؟
Detection validation|بعد إضافة قاعدة SIEM، ما الاختبار؟|كيف تثبت كشف الهجوم وعدم ضوضاء كبيرة؟`]
]},
{id:'cbrfir-300-215',name:'Cisco CBRFIR 300-215',minutes:90,groups:[
['Forensic Collection',`Chain of custody|كيف توثق انتقال دليل بين محللين؟|ما سجل حيازة يثبت سلامة الدليل؟
Disk image|كيف تحفظ نسخة بتات قبل تحليل قرص؟|ما صورة جنائية مع تجزئة للتحقق؟
Memory capture|تشتبه بعملية في RAM ستضيع عند الإغلاق. ماذا تجمع؟|ما نسخة ذاكرة متطايرة قبل فصل الجهاز؟
Hash verification|كيف تثبت أن النسخة لم تتغير؟|ما مقارنة SHA-256 بين أصل ونسخة؟
Write blocker|كيف تمنع تغيير القرص الأصلي أثناء التصوير؟|ما جهاز أو إعداد يمنع الكتابة على الدليل؟`],
['Artifact Analysis',`Process tree|كيف تتبع parent/child عند تشغيل malware؟|ما تسلسل العمليات الذي يكشف التنفيذ؟
Persistence key|كيف تبحث عن تشغيل خبيث بعد restart؟|ما مفاتيح Run أو scheduled task تراجع؟
Browser artifacts|كيف تحدد تنزيل ملف ضار من رابط؟|ما history/cache/downloads في المتصفح؟
Timeline|سجلات متعددة غير مرتبة؛ كيف تعيد تسلسل الحادث؟|ما ترتيب الأحداث بعد توحيد المنطقة الزمنية؟
Network pcap|كيف تثبت اتصال الجهاز بخادم خارجي؟|ما دليل حزم DNS/TCP أثناء الواقعة؟`],
['Response',`Scoping|عُثر على IOC في جهاز. كيف تحدد النطاق؟|ما بحث شامل في EDR/SIEM عن بقية الأجهزة؟
Containment|كيف تمنع مضيفًا مصابًا من الاتصال الجانبي؟|ما عزل endpoint مع حفظ الوصول التحقيقي؟
Eradication|بعد تحديد persistence، ما خطوة إزالة؟|كيف تزيل برمجية وأسباب العودة بعد الاحتواء؟
Recovery|كيف تعيد الخدمة دون إعادة العدوى؟|ما استعادة موثوقة مع مراقبة مؤشرات؟
Communication|من يوافق على فصل خادم حرج؟|ما خطة تصعيد وأثر وقرار موثق؟`],
['Reporting and Evidence',`IOC vs TTP|ما الذي يبقى مفيدًا بعد تغيير المهاجم عنوان IP؟|أي سلوك وتقنية أبقى من مؤشر عابر؟
Root cause|كيف تفرق بين phishing كبداية وثغرة ثانوية؟|ما تحليل نقطة الدخول وتسلسل الاستغلال؟
Evidence integrity|لماذا تحفظ نسخة عمل منفصلة عن الأصل؟|ما حماية الدليل أثناء التحليل؟
Executive report|كيف تصيغ أثر الحادث للإدارة؟|ما نطاق وخسائر وخطوات وتوصيات بلغة واضحة؟
Lessons learned|ما الذي تراجع بعد الإغلاق؟|كيف تحول ثغرة استجابة إلى إجراء تحسين؟`]
]},
{id:'cbrthd-300-220',name:'Cisco CBRTHD 300-220',minutes:90,groups:[
['Threat Hunting',`Hypothesis-driven hunt|كيف تبدأ بحثًا عن استخدام PsExec غير معتاد؟|ما فرضية تتوقع آثارًا قابلة للقياس؟
Baseline|كيف تعرف أن حجم DNS غير طبيعي؟|ما سلوك مرجعي للموقع والمستخدم؟
ATT&CK mapping|كيف تربط سجلات التنفيذ بتقنية adversary؟|ما تصنيف TTPs للفجوات في الرؤية؟
Pivoting|وجدت IP خبيثًا. ما الخطوة للتوسع؟|كيف تنتقل من اتصال إلى مضيف وحساب وملف مرتبط؟
Hunt documentation|كيف تحفظ استعلامات ونتائج البحث لتكرارها؟|ما سجل فرضية ونطاق ومصادر واستنتاج؟`],
['Telemetry',`EDR process events|كيف تكتشف PowerShell مولّدًا من Word؟|ما شجرة عمليات endpoint؟
DNS telemetry|كيف ترى استعلامات domain generation متكررة؟|ما سجلات حل الأسماء وتسلسلها؟
Flow records|كيف ترصد حركة خارجية منتظمة ذات حجم ثابت؟|ما NetFlow/IPFIX للزمن والوجهة والحجم؟
Authentication logs|كيف تكشف استخدام حساب على أجهزة كثيرة بسرعة؟|ما أحداث دخول وهوية ومواقع؟
Proxy logs|كيف تربط تنزيل ملف بخادم ويب خارجي؟|ما سجلات URL والمستخدم والرد؟`],
['Detection Engineering',`Behavioral rule|المهاجم يغير hash دائمًا. ما نوع الكشف الأفضل؟|ما قاعدة لسلوك process وشبكة غير معتاد؟
False positive tuning|النسخ الاحتياطي يطلق إنذار exfiltration. ما التصرف؟|كيف تضيق الاستثناء حسب أصل وهوية ووقت؟
Test dataset|كيف تتحقق من كشف جديد دون انتظار هجوم؟|ما أحداث محاكاة تمثل الحالة الإيجابية والسلبية؟
Alert context|ما الحقول التي يحتاجها محلل في تنبيه؟|أي هوية وhost ووقت وسبب ومؤشرات تربط الحدث؟
Detection coverage|كيف تعرف تقنيات الخصم غير المرصودة؟|ما مصفوفة ATT&CK مقابل مصادر القياس والقواعد؟`],
['Defense and Response',`Host isolation|كشف beacon على جهاز. ما احتواء أول؟|كيف تمنع اتصالاته مع إبقاء دليل التحقيق؟
Account revocation|حساب مسروق يستخدم token نشطًا. ما الإجراء؟|ما إبطال الجلسات والرموز وإعادة المصادقة؟
Network segmentation|كيف تمنع حركة lateral بين أقسام؟|ما حدود وصول شرقية وغربية دقيقة؟
Threat intel enrichment|كيف تفسر نطاقًا جديدًا مجهولًا؟|ما ربط عمر وسمعة وملاحظات داخلية بمؤشر؟
Post-hunt action|بحث سلبي كشف فقد سجلات من بعض الأجهزة. ماذا تفعل؟|ما تحسين تغطية telemetry وإعادة التحقق؟`]
]},
{id:'cysa-plus',name:'CompTIA CySA+ CS0-003',minutes:165,groups:[
['Security Operations',`SIEM correlation|فشلت محاولات دخول ثم ظهر اتصال C2. كيف تربط الأحداث؟|ما تحليل يربط سجلات الهوية وDNS وendpoint؟
EDR telemetry|كيف تعرف أن Word شغّل PowerShell على جهاز؟|ما شجرة عمليات endpoint المناسبة للتحقيق؟
Threat intelligence|نطاق جديد ورد في تقرير موثوق. كيف تضيف السياق؟|ما مصدر سمعة وTTP ودرجة ثقة للمؤشر؟
Baseline|ما المرجع للكشف عن upload ليلي غير معتاد؟|كيف تفرق السلوك الطبيعي من الشذوذ؟
Hunting query|تشتبه باستخدام حساب خدمة خارج أوقاته. ماذا تبني؟|ما استعلام قابل للتكرار على سجلات الدخول؟`],
['Vulnerability Management',`Authenticated scan|كيف تكشف تحديثات مفقودة داخل نظام دون الاعتماد على banner فقط؟|ما فحص يستخدم هوية مخولة لإثبات حالة الحزم؟
Risk prioritization|ثغرتان بدرجة واحدة؛ إحداهما على خدمة عامة. أي عامل يحسم؟|كيف تدمج التعرض والأصل والاستغلال في ترتيب المعالجة؟
False positive validation|الماسح أبلغ عن خدمة غير موجودة. ماذا تفعل؟|كيف تؤكد finding قبل التصعيد؟
Patch verification|بعد نشر تحديث، كيف تثبت إغلاق الثغرة؟|ما إعادة فحص أو تحقق إصدار بعد remediation؟
Compensating control|لا يمكن تحديث خادم قديم. ماذا تضيف مؤقتًا؟|ما عزل ومراقبة وتقليل سطح الهجوم كبديل مؤقت؟`],
['Incident Response',`Containment|جهاز مصاب يرسل بيانات لخارج الشركة. ما أول حد للانتشار؟|ما عزل endpoint وحجب الوجهة وفق الخطة؟
Evidence preservation|قبل تنظيف الجهاز، ما الذي تحفظه؟|ما ذاكرة وسجلات وصورة وبصمات تفيد التحقيق؟
Eradication|بعد العزل، ما العمل على persistence؟|كيف تزيل آلية البقاء والسبب الأصلي؟
Recovery|كيف تعيد الخدمة بثقة؟|ما استعادة من مصدر موثوق مع مراقبة؟
Chain of custody|دليل ينتقل لمحلل آخر. كيف توثق ذلك؟|ما سجل يثبت من استلم الدليل ومتى؟`],
['Reporting and Communication',`Executive summary|كيف تعرض حادثًا للإدارة دون تفاصيل خام؟|ما أثر ونطاق وزمن وقرار وتوصية؟
Incident timeline|أحداث من مناطق زمنية مختلفة؛ كيف ترتبها؟|ما توحيد الطوابع الزمنية لشرح التسلسل؟
Metrics|كيف تقيس سرعة اكتشاف واحتواء الحوادث؟|ما مؤشرا MTTD وMTTR؟
Lessons learned|ما المخرجات بعد إغلاق الحادث؟|كيف تحول سبب الجذر لفعل وقائي؟
Stakeholder update|التحقيق لم ينتهِ بعد. ماذا تبلغ المتأثرين؟|ما حقائق مؤكدة وتأثير وخطوات وتوقيت تحديث لاحق؟`]
]},
{id:'pentest-plus',name:'CompTIA PenTest+ PT0-003',minutes:165,groups:[
['Planning and Scope',`Rules of engagement|كيف تحدد النطاق والتوقيت والتقنيات المسموحة قبل الاختبار؟|ما اتفاق يحدد حدود العمل والتواصل؟
Written authorization|عميل طلب فحص عنوان عام بلا وثيقة. ما المطلب أولًا؟|ما إثبات إذن قانوني قبل أي نشاط؟
Out-of-scope asset|وجدت IP حساسًا خارج العقد. ماذا تفعل؟|ما قاعدة عدم فحص أصل غير مخول؟
Emergency contact|اختبار تسبب بتوقف خدمة. إلى من تصعّد؟|ما جهة اتصال وخطة توقف متفق عليها؟
Success criteria|كيف تعرف أن اختبارًا حقق هدفه؟|ما شروط قبول ومخرجات محددة في البداية؟`],
['Recon and Enumeration',`Passive reconnaissance|كيف تجمع أسماء نطاقات دون إرسال طلب للأصل؟|ما مصادر عامة قبل probing؟
Port scanning|كيف تحدد الخدمات المفتوحة ضمن النطاق؟|ما فحص منافذ TCP/UDP مصرح به؟
Service enumeration|منفذ 443 مفتوح. ما الخطوة لكشف التقنية والإصدار؟|كيف تجمع banner وTLS وHTTP metadata؟
DNS enumeration|كيف تكتشف subdomains مصرح بها؟|ما بحث سجلات وأسماء ضمن النطاق؟
Vulnerability validation|الماسح قال SQLi. ماذا قبل التقرير؟|ما تحقق مضبوط يقلل false positives دون ضرر؟`],
['Exploitation and Post-exploitation',`Least impact|ثغرة تسمح بحذف قاعدة بيانات. كيف تثبتها؟|ما PoC محدود لا يدمر بيانات الإنتاج؟
Privilege escalation|حساب منخفض حصل على صلاحيات أعلى. ما الفئة؟|ما انتقال من user إلى admin ضمن النطاق؟
Lateral movement|صلاحية من جهاز أول تستخدم للوصول إلى ثانٍ. ما السلوك؟|ما حركة أفقية بين أنظمة مصرح بها؟
Credential handling|عثرت على كلمات مرور أثناء الاختبار. ماذا تفعل؟|ما تخزين مشفر ومشاركة محدودة وحذف وفق الاتفاق؟
Persistence prohibition|هل تثبت backdoor بعد نجاح الاختبار تلقائيًا؟|ما قيد يمنع زرع آلية بقاء دون تفويض صريح؟`],
['Reporting and Remediation',`Reproducible finding|كيف تجعل الثغرة قابلة لإصلاح ومراجعة؟|ما خطوات وأثر ودليل وبيئة دون إفشاء أسرار؟
Risk context|ثغرة خطيرة على نظام معزول وأخرى على عام. كيف ترتب؟|ما أثر التعرض والاحتمال في التقييم؟
Root cause|تكرر misconfiguration في عدة خوادم. ماذا تذكر؟|ما سياسة نشر أو قالب سبب الخلل؟
Retest|الفريق أعلن إصلاح SQLi. ماذا تفعل؟|ما إعادة اختبار النتيجة ونطاق مشابه بعد العلاج؟
Executive report|كيف تلخص للاعتماد الإداري؟|ما مخاطر الأعمال والأولويات وخطة إصلاح؟`]
]},
{id:'securityx',name:'CompTIA SecurityX CAS-005',minutes:165,groups:[
['Security Architecture',`Zero trust|شبكة داخلية لا تعني مستخدمًا موثوقًا. ما النمط؟|ما تحقق مستمر لكل طلب مع أقل امتياز؟
Microsegmentation|كيف تمنع حركة شرقية وغربية بين الأحمال؟|ما سياسة دقيقة بين الخدمات بدل VLAN واسعة؟
Defense in depth|ضابط واحد فشل دون اختراق كامل. لماذا؟|ما طبقات حماية مستقلة؟
Threat modeling|مشروع جديد قبل النشر؛ كيف تتوقع مسارات الهجوم؟|ما تحليل أصول وحدود ثقة وتهديدات؟
High availability|خدمة هوية تتوقف مع خادم واحد. ما التصميم؟|ما ازدواج لمكونات مصادقة حرجة؟`],
['Governance and Risk',`Risk appetite|من يحدد مستوى المخاطر المقبول للمؤسسة؟|ما حد قرار إداري لقياس قبول خطر؟
BIA|تحتاج ترتيب استعادة الخدمات بعد كارثة. ما التحليل؟|ما قياس أثر توقف العمليات؟
RTO|نظام يجب أن يعود خلال ساعتين. ما المؤشر؟|ما زمن الاستعادة المستهدف؟
RPO|مسموح بفقد آخر 15 دقيقة بيانات. ما المؤشر؟|ما نقطة الاستعادة الزمنية؟
Third-party risk|مورد SaaS يعالج بيانات حساسة. ما الفحص؟|ما تقييم ضوابط وعقد وخطة خروج المورد؟`],
['Security Engineering',`Secrets management|مفتاح API في Git. ما التصميم الأفضل؟|ما مخزن أسرار ودوران وخدمة هوية؟
Supply chain validation|حزمة مفتوحة المصدر أضيفت للمشروع. ما الاختبار؟|ما فحص مصدر واعتماديات وتوقيع؟
Cryptographic agility|تريد تغيير خوارزمية عند ضعفها مستقبلًا. ما مبدأ التصميم؟|ما فصل سياسة التشفير عن التطبيقات لتسهيل التحديث؟
Secure boot|كيف تثبت سلامة سلسلة بدء النظام؟|ما تحقق توقيعات firmware وbootloader؟
Policy as code|كيف تختبر قواعد أمن قبل نشر IaC؟|ما تعبير ضوابط آلي قابل للمراجعة؟`],
['Security Operations',`SOAR playbook|إنذار هوية يطلب احتواء متكرر. ما الآلية؟|ما تنسيق استجابة آلية مع موافقات؟
Purple team|كيف تحول اختبار هجوم لتحسين الكشف؟|ما تعاون red وblue للتحقق من الرؤية؟
Incident command|حادث كبير متعدد الفرق. ما الحاجة؟|ما قيادة وأدوار واتصالات واضحة؟
Forensic readiness|كيف تحفظ دليلًا صالحًا للتحقيق مسبقًا؟|ما سياسة logging وحفظ وسلسلة حيازة؟
AI risk review|وكيل يقترح تغيير firewall. ماذا تفرض؟|ما تحقق بشري واختبار وحدود صلاحية قبل التنفيذ؟`]
]},
{id:'cloud-plus',name:'CompTIA Cloud+ CV0-004',minutes:90,groups:[
['Cloud Architecture',`IaaS|عميل يدير نظام التشغيل على VM افتراضية. ما النموذج؟|ما خدمة بنية تحتية تقدم compute وتترك OS للعميل؟
PaaS|تطبيق يُنشر دون إدارة نظام تشغيل الخادم. ما النموذج؟|ما منصة تستضيف runtime وتدير البنية؟
SaaS|فريق يستخدم بريدًا جاهزًا عبر المتصفح. ما النموذج؟|ما تطبيق مستضاف يدير مزوده معظم الطبقات؟
Hybrid cloud|شركة تربط مركزها بسحابة عامة. ما البيئة؟|ما نموذج يجمع private وpublic؟
Shared responsibility|من مسؤول عن ضبط بيانات العميل في cloud؟|ما مبدأ تقسيم أدوار المزود والعميل؟`],
['Deployment and Operations',`Autoscaling|الطلب يزيد لساعتين يوميًا. ما الإجراء؟|كيف تزيد وتقلل instances وفق الحمل؟
Load balancing|خدمة تملك ثلاثة خوادم. ما توزيع الطلبات؟|ما مكوّن يوفر health check وتوجيهًا؟
Infrastructure as code|تريد نسخ بيئة تجريبية لعدة مناطق. ما النهج؟|ما تعريف موارد cloud في ملفات مراجعة؟
Containers|تريد تغليف تطبيق واعتمادياته مع مشاركة kernel. ما التقنية؟|ما بديل خفيف نسبيًا لـVM كاملة؟
Observability|تطبيق بطيء بلا خطأ ظاهر. ما تجمع؟|ما metrics/logs/traces لفهم الأداء؟`],
['Security and Networking',`IAM least privilege|حساب خدمة لديه صلاحية admin بلا داع. ماذا تفعل؟|ما حصر الأذونات للمهمة فقط؟
Encryption at rest|تخاف كشف أقراص تخزين. ما الضابط؟|ما تشفير البيانات وهي ساكنة؟
Private subnet|خادم قاعدة بيانات لا يحتاج public IP. أين تضعه؟|ما شبكة فرعية داخلية مع وصول محدود؟
VPN|كيف تربط فرعًا بالسحابة عبر إنترنت مشفر؟|ما نفق آمن بين الموقعين؟
Security group|كيف تسمح TCP 443 وتمنع SSH من الإنترنت؟|ما جدار افتراضي مربوط بالموارد؟`],
['Resilience and Troubleshooting',`RPO|نسخة كل ساعة تعني احتمال فقد كم من البيانات؟|ما مقياس حد فقد البيانات المقبول؟
RTO|الخدمة يجب أن تعود خلال 30 دقيقة. ما المقياس؟|ما زمن استعادة مستهدف؟
Multi-zone deployment|ما حل فشل منطقة توافر كاملة؟|كيف توزع خوادم التطبيق عبر zones؟
DNS troubleshooting|التطبيق يعمل عبر IP ولا يعمل بالاسم. ماذا تفحص؟|ما خدمة ترجمة الاسم وسجلها؟
Cost optimization|موارد التطوير تعمل ليلًا دون استخدام. ما التحسين؟|كيف توقف أو تحجّم موارد غير مستغلة؟`]
]},
{id:'az-700',name:'Microsoft AZ-700 Azure Network Engineer',minutes:100,groups:[
['Core Network',`VNet peering|كيف تربط شبكتين Azure افتراضيتين خاصتين؟|ما اتصال VNet-to-VNet عبر backbone Azure؟
NSG|كيف تقيد TCP 443 على subnet أو NIC؟|ما فلتر طبقة الشبكة بقواعد أولوية؟
Route table UDR|كيف توجه subnet عبر appliance افتراضي؟|ما مسار يحدده المستخدم بدل system route؟
Azure DNS Private Resolver|كيف تحل أسماء Azure الخاصة من on-premises دون DNS VM؟|ما خدمة DNS مُدارة للربط الهجين؟
NAT Gateway|كيف تعطي subnet خروج Internet قابلًا للتوسع دون public IP لكل VM؟|ما خدمة SNAT مُدارة للشبكة الفرعية؟`],
['Hybrid Connectivity',`ExpressRoute|مؤسسة تريد اتصالًا خاصًا مخصصًا مع Azure. ما الخدمة؟|ما ربط خاص لا يعتمد على نفق Internet العام؟
VPN Gateway|كيف تربط on-premises بـVNet عبر IPsec؟|ما بوابة اتصال site-to-site في Azure؟
Virtual WAN|عشرات الفروع تحتاج hub مركزي مُدار. ما الخدمة؟|ما منصة ربط واسعة بنمط hub-and-spoke؟
Azure Route Server|كيف تتبادل BGP routes مع NVA داخل Azure؟|ما خدمة إعلان وتعلم مسارات ديناميكيًا؟
BGP peering|مسارات ExpressRoute لا تظهر بعد تفعيل الوصلة. ماذا تفحص؟|ما جلسة إعلان prefixes بين الطرفين؟`],
['Application Delivery',`Azure Load Balancer|كيف توزع TCP داخليًا على عدة VMs؟|ما موزع طبقة رابعة في Azure؟
Application Gateway|تريد توجيه HTTP حسب المسار مع WAF إقليمي. ما الخدمة؟|ما موزع طبقة سابعة لتطبيق ويب في VNet؟
Azure Front Door|تريد نقطة دخول عالمية لتطبيق موزع عبر مناطق. ما الخدمة؟|ما خدمة HTTP edge عالمية مع routing؟
Traffic Manager|كيف توجه DNS إلى endpoint صحي في منطقة أخرى؟|ما خدمة توجيه تعتمد DNS بدل proxy مباشر؟
Health probe|الموزع يرسل مرورًا لخادم لا يستجيب. ما تضبط؟|ما اختبار يقرر صلاحية backend؟`],
['Private Access and Security',`Private Endpoint|تريد وصولًا لخدمة PaaS عبر IP خاص في VNet. ما المكوّن؟|ما واجهة Private Link على الشبكة؟
Private DNS zone|Private Endpoint يعمل بعنوان IP لكن اسمه يحل إلى عام. ما الناقص؟|ما منطقة أسماء داخلية مرتبطة بـVNet؟
Service Endpoint|تريد تقييد PaaS لشبكة فرعية عبر backbone مع بقاء عنوان الخدمة العام. ما التقنية؟|ما امتداد هوية subnet لخدمة Azure؟
Azure Firewall|تريد سياسات خروج مركزية وفحص FQDN. ما الخدمة؟|ما جدار شبكة مُدار لمركز hub؟
Azure Bastion|كيف تدير VM عبر RDP/SSH دون public IP؟|ما خدمة وصول إدارة عبر portal بواجهة خاصة؟`]
]}
];
for(const bank of TWENTY){
 const questions=[];
 if(bank.groups.length!==4)throw Error(`Expected four domains in ${bank.id}`);
 for(const [topic,raw] of bank.groups){
  const rows=raw.trim().split('\n').map(line=>line.split('|').map(v=>v.trim()));
  if(rows.length!==5||rows.some(r=>r.length!==3))throw Error(`Expected five concepts in ${bank.id}/${topic}`);
  rows.forEach(([correct,scenario,followup],index)=>{
   for(const [variant,text] of [scenario,followup].entries()){
    const offsets=variant?[1,3,4]:[1,2,3];
    const options=[correct,...offsets.map(offset=>rows[(index+offset)%5][0])];
    if(new Set(options).size!==4)throw Error(`Duplicate choices: ${bank.id}/${topic}`);
    questions.push({topic,text,options,answer:0,why:`${correct} هو المفهوم المناسب للحالة المذكورة ضمن محور ${topic}.`});
   }
  });
 }
 if(questions.length!==40||new Set(questions.map(q=>q.text)).size!==40)throw Error(`Invalid bank: ${bank.id}`);
 window.OMNITECH_EXAMS.push({id:bank.id,name:bank.name,track:'Diagnostic practice',minutes:bank.minutes,coverage:'20 مفهومًا بسيناريوهين لكل مفهوم',questions});
}
