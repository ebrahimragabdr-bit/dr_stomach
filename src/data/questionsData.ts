import { Question } from '../types/game';

export const ALL_QUESTIONS: Question[] = [
  // ==================== CHAPTER 1: Surgical Anatomy & Physiology (1–18) ====================
  {
    id: 1,
    ch: 1,
    tag: 'Anatomy',
    q: 'Which anatomical landmark demarcates the boundary between the body of the stomach and the pyloric antrum on the lesser curvature?',
    o: ['Cardia', 'Pyloric sphincter', 'Incisura angularis', 'Ligament of Treitz'],
    a: 2,
    hint: 'زاوية واضحة على الـ Lesser curvature بتفصل جسم المعدة عن الجزء السفلي.',
    exp: 'الـ Body بيمتد من الـ Cardia فوق لحد الـ Incisura angularis تحت، ومن بعدها يبدأ الـ Antrum لحد الـ Pyloric sphincter. أما الـ Ligament of Treitz فده بيثبت الـ Duodenojejunal flexure مش المعدة.'
  },
  {
    id: 2,
    ch: 1,
    tag: 'Histology & Physiology',
    q: 'Why is the mucosal surface of the gastric antrum considered alkaline compared to the rest of the stomach?',
    o: [
      'It actively secretes concentrated bicarbonate',
      'Its glands contain mucus and neuro-endocrine cells without parietal cells',
      'Constant physiological bile reflux neutralizes it',
      'Chief cells neutralize the luminal acid'
    ],
    a: 1,
    hint: 'فكر في نوع الخلايا الموجودة في غدد الـ Antrum مقارنة بالـ Fundus والـ Body.',
    exp: 'غدد الـ Antrum بتتكون أساساً من خلايا مخاطية و Neuro-endocrine cells (بتفرز Gastrin) ومفيهاش Parietal cells بتفرز حمض، وعشان كده هي قلوية ومستهدفة من حمض المعدة. الفخ: الـ Chief cells بتفرز Pepsinogen مش بتعادل الحمض.'
  },
  {
    id: 3,
    ch: 1,
    tag: 'Anatomy',
    q: 'What is the unique arrangement of the muscularis propria in the gastric wall from inside outwards?',
    o: [
      'Inner circular, middle oblique, outer longitudinal',
      'Innermost incomplete oblique, middle circular, outer longitudinal',
      'Inner longitudinal, middle circular, outer oblique',
      'Two layers only (inner circular and outer longitudinal)'
    ],
    a: 1,
    hint: 'المعدة عندها طبقة عضلية تالتة جوه خالص بتساعد في طحن الأكل.',
    exp: 'جدار المعدة العضلي متميز بوجود طبقة تالتة جوه خالص اسمها Incomplete oblique layer زيادة على الطبقتين المعتادين (Inner circular و Outer longitudinal) عشان تساعد في طحن الأكل إلى chyme.'
  },
  {
    id: 4,
    ch: 1,
    tag: 'Vascular Anatomy',
    q: 'A surgeon ligates both the left and right gastric arteries during an operation. Why does the stomach wall NOT undergo ischemic necrosis?',
    o: [
      'Dual blood supply from the superior mesenteric artery',
      'Extensive anastomotic arterial network in the submucosa',
      'Direct collateral branches from the phrenic arteries',
      'Venous backflow from the portal vein'
    ],
    a: 1,
    hint: 'بص في طبقة الـ Submucosa وشبكة الشرايين الغنية جوه جدار المعدة.',
    exp: 'المعدة عندها شبكة تواصل شرايين غنية جداً في طبقة الـ Submucosa (من الـ Coeliac axis)، وده بيخلي الجراح يقدر يربط أكتر من شريان من غير ما يحصل أي غرغرينا. أما الـ SMA فبيغذي من بعد الـ Major duodenal papilla.'
  },
  {
    id: 5,
    ch: 1,
    tag: 'Vascular Anatomy',
    q: 'Which artery arises directly from the gastroduodenal artery to supply the greater curvature of the stomach?',
    o: [
      'Left gastroepiploic artery',
      'Right gastric artery',
      'Right gastroepiploic artery',
      'Short gastric arteries'
    ],
    a: 2,
    hint: 'بيمشي على الجزء السفلي من الـ Greater curvature وبيكمل القوس مع فرع الـ Splenic.',
    exp: 'الـ Right gastroepiploic بيطلع من الـ Gastroduodenal artery، بينما الـ Left gastroepiploic والـ Short gastrics بيطلعوا من الـ Splenic artery، والـ Right gastric بيطلع من الـ Hepatic artery.'
  },
  {
    id: 6,
    ch: 1,
    tag: 'Operative Anatomy',
    q: 'During subtotal gastrectomy for distal gastric cancer, the remaining upper gastric pouch survives primarily on blood supply from which vessels?',
    o: [
      'Left gastric artery',
      'Short gastric arteries (vasa brevia)',
      'Right gastroepiploic artery',
      'Gastroduodenal artery'
    ],
    a: 1,
    hint: 'أوعية قصيرة جاية من الـ Splenic artery جوه الـ Gastrosplenic ligament.',
    exp: 'في الـ Subtotal gastrectomy بنحافظ على الجزء العلوي من المعدة وبيعيش على الـ Short gastric vessels (vasa brevia) اللي جاية من الـ Splenic artery جوه الـ Gastrosplenic ligament. الـ Left & right gastric و الـ Right gastroepiploic بيتشالوا مع الورم.'
  },
  {
    id: 7,
    ch: 1,
    tag: 'Neuroanatomy',
    q: 'Injury to the hepatic branch of the anterior vagus nerve during gastric surgery primarily leads to which complication?',
    o: [
      'Paralytic ileus of the transverse colon',
      'Biliary dyskinesia and gallstone formation',
      'Loss of pancreatic exocrine secretion',
      'Abolition of lower esophageal sphincter tone'
    ],
    a: 1,
    hint: 'الفرع ده رايح للكبد والمرارة.. لو اتقطع وظيفة المرارة هتتلخبط!',
    exp: 'الـ Anterior vagus بيدي Hepatic branch للكبد والمرارة، وقطعه بيعمل Biliary dyskinesia وتكوين حصوات مرارة (سؤال امتحانات متكرر!). أما الـ Posterior vagus فبيدي Coeliac branch.'
  },
  {
    id: 8,
    ch: 1,
    tag: 'Neuroanatomy',
    q: 'Up to which anatomical segment of the gut does the celiac branch of the posterior vagus nerve share in parasympathetic innervation?',
    o: [
      'Duodenojejunal flexure',
      'Terminal ileum',
      'Mid-transverse colon',
      'Sigmoid colon'
    ],
    a: 2,
    hint: 'حدود تغذية الـ Foregut والـ Midgut في القولون.',
    exp: 'الـ Coeliac branch بتاع الـ Posterior vagus بيروح للـ Coeliac plexus وبيغذي الأمعاء لحد الـ Mid-transverse colon (نهاية الـ Midgut).'
  },
  {
    id: 9,
    ch: 1,
    tag: 'Lymphatics',
    q: 'Which lymph node group is classified as a "Second-Tier" (Secondary station) lymph node in gastric lymphatic drainage?',
    o: [
      'Suprapyloric nodes',
      'Nodes around the left gastric artery',
      'Splenic and common hepatic artery nodes',
      'Right and left cardiac nodes'
    ],
    a: 2,
    hint: 'الـ First-tier هي العقد الملاصقة لجدار المعدة (1-7)، والـ Second-tier على الشرايين الرئيسية.',
    exp: 'الـ First-tier هم الـ 7 مجموعات الملاصقين لجدار المعدة (بما فيهم الـ Left gastric رقم 7 و Suprapyloric و Cardiac)، إنما الـ Second-tier هم اللي على الشرايين الرئيسية (Coeliac, Common hepatic, Hepatic proper, Splenic).'
  },
  {
    id: 10,
    ch: 1,
    tag: 'Duodenal Anatomy',
    q: 'Which segment of the duodenum is completely intraperitoneal?',
    o: [
      'The entire first part (2 inches)',
      'The first inch of the first part (duodenal bulb/cap)',
      'The second part around the ampulla of Vater',
      'The fourth part at the ligament of Treitz'
    ],
    a: 1,
    hint: 'أول بوصة بس من الجزء الأول اللي بنسميها الـ Cap.',
    exp: 'الـ Duodenum كله Retroperitoneal ما عدا أول بوصة بس من الجزء الأول (اللي اسمها الـ Bulb أو الـ Cap) فهي Intraperitoneal بالكامل.'
  },
  {
    id: 11,
    ch: 1,
    tag: 'Duodenal Anatomy',
    q: 'Which two major structures lie directly posterior to the first part of the duodenum?',
    o: [
      'Portal vein and inferior vena cava',
      'Common bile duct and gastroduodenal artery',
      'Superior mesenteric artery and vein',
      'Splenic vein and tail of pancreas'
    ],
    a: 1,
    hint: 'عشان كده قرحة الاثني عشر الخلفية بتعمل نزيف عنيف لو كلت الشريان ده!',
    exp: 'الجزء الأول من الاثني عشر وراه مباشرة الـ CBD والـ Gastroduodenal artery، وعشان كده القرحة الخلفية لما بتخرم بتاكل الـ Gastroduodenal artery وتعمل نزيف عنيف. الفخ: الـ SMA/SMV بيعدوا قدام الجزء التالت مش ورا الأول.'
  },
  {
    id: 12,
    ch: 1,
    tag: 'Embryology & Anatomy',
    q: 'Which anatomical landmark in the duodenum marks the embryological junction between the foregut and the midgut?',
    o: [
      'Pyloric ring',
      'Duodenojejunal flexure',
      'Major duodenal papilla in the middle of the medial aspect of the 2nd part',
      'Crossing of the superior mesenteric vessels over the 3rd part'
    ],
    a: 2,
    hint: 'موجود في منتصف الجدار الداخلي للجزء التاني (Ampulla of Vater).',
    exp: 'الـ Major duodenal papilla في نص الجدار الداخلي للجزء التاني هي الحد الفاصل بين الـ Foregut (تغذية Coeliac) والـ Midgut (تغذية SMA).'
  },
  {
    id: 13,
    ch: 1,
    tag: 'Physiology',
    q: 'What physiological mechanism allows the fundus and body of the stomach to accommodate large volumes of food without a significant rise in intragastric pressure?',
    o: [
      'Antral retropulsion',
      'Vagal-mediated receptive relaxation',
      'Sympathetic inhibition of the pylorus',
      'Gastrin-induced smooth muscle relaxation'
    ],
    a: 1,
    hint: 'خاصية بتضيع لما نقطع العصب الحائر في الـ Truncal vagotomy.',
    exp: 'المعدة العليا بتعمل Receptive relaxation عن طريق العصب الحائر (Vagus)، ولو اتقطع الـ Vagus المريض بيفقد الخاصية دي ويحس بامتلاء سريع و Gastric stasis.'
  },
  {
    id: 14,
    ch: 1,
    tag: 'Physiology',
    q: 'Which type of meal composition physiologically retards (slows down) gastric emptying the most?',
    o: [
      'Isotonic warm fluids',
      'Solid, fatty, and hyperosmolar foods',
      'Cold alkaline liquids',
      'Low-calorie simple sugars'
    ],
    a: 1,
    hint: 'الأكل الثقيل اللي محتاج هضم طويل في الاثني عشر.',
    exp: 'الأكل الصلب والدهون والمحاليل عالية التركيز (Hyperosmolar) بتبطأ تفريغ المعدة. أما السوائل الـ Isotonic فبتعدي بسرعة.'
  },
  {
    id: 15,
    ch: 1,
    tag: 'Physiology',
    q: 'At what luminal pH threshold does the negative feedback mechanism inhibit gastrin release from antral G-cells?',
    o: ['pH less than 5.0', 'pH less than 4.0', 'pH less than 2.0', 'pH less than 7.0'],
    a: 2,
    hint: 'حموضة عالية جداً جوه المعدة تقفل الحنفية.',
    exp: 'الـ Gastrin هو أقوى محفز للحمض، ولما الـ pH ينزل تحت 2 (حموضة عالية جداً) بيحصل Negative feedback يوقف إفراز الـ Gastrin من خلايا الـ G-cells في الـ Antrum.'
  },
  {
    id: 16,
    ch: 1,
    tag: 'Physiology',
    q: 'How does Gastrin primarily stimulate the parietal cells to secrete hydrochloric acid during the gastric phase?',
    o: [
      'By blocking somatostatin receptors directly',
      'Through the local release of histamine',
      'By activating pepsinogen into pepsin',
      'Through direct opening of chloride channels'
    ],
    a: 1,
    hint: 'بيستعين بوسيط موضعي من خلايا الـ ECL (عشان كده H2 blockers بتوقفه).',
    exp: 'الـ Gastrin غالباً بيشتغل على الـ Parietal cells عن طريق إنه يحفز إفراز الـ Histamine موضعياً.'
  },
  {
    id: 17,
    ch: 1,
    tag: 'Mucosal Barrier',
    q: 'Which enzyme secreted by Helicobacter pylori directly destroys the protective mucus layer of the gastroduodenal barrier?',
    o: ['Urease', 'Protease', 'Oxidase', 'Catalase'],
    a: 1,
    hint: 'فرق بين اللي بيطلع أمونيا واللي بيكسر البروتين/المخاط واللي بيطلع شوارد حرة.',
    exp: 'الـ H. pylori بتفرز 3 إنزيمات: Urease (يطلع أمونيا تزود الـ Gastrin)، و Protease (بيكسر المخاط مباشرة)، و Oxidase (بيطلع Free radicals تموت الخلايا).'
  },
  {
    id: 18,
    ch: 1,
    tag: 'Mucosal Barrier',
    q: 'Why does the surface of the gastric mucosal cells maintain a much higher (neutral) pH than the highly acidic gastric lumen?',
    o: [
      'Rapid absorption of hydrogen ions by chief cells',
      'Trapping of secreted bicarbonate between the mucosal surface and the overlying mucus layer',
      'Continuous neutralization by salivary amylase',
      'Impermeability of the muscularis mucosa'
    ],
    a: 1,
    hint: 'عازل كيميائي محبوس تحت طبقة المخاط.',
    exp: 'البيكربونات اللي بتفرزها الخلايا بتتحبس بين سطح الخلية وطبقة المخاط، فتعمل عازل يخلي الـ Surface pH أعلى بكتير من الـ Luminal pH.'
  },

  // ==================== CHAPTER 2: Pathology, Classifications & Pharmacology (19–33) ====================
  {
    id: 19,
    ch: 2,
    tag: 'Acute Ulcer',
    q: 'Multiple superficial gastric erosions occurring mainly on the greater curvature of the distal stomach in a patient with a major burn are known as:',
    o: ["Cushing's ulcer", "Curling's ulcer", "Dieulafoy's lesion", "Marjolin's ulcer"],
    a: 1,
    hint: 'حرف البداية مع Burn vs Brain: افتكر الكيرلي بتاع الحروق!',
    exp: "قرح الحروق الكبيرة اسمها Curling's ulcer، بينما قرح إصابات وأورام المخ اسمها Cushing's ulcer. أما Marjolin's ulcer فدي سرطان على جرح مزمن."
  },
  {
    id: 20,
    ch: 2,
    tag: 'Acute Ulcer',
    q: 'Where do acute stress gastric erosions most commonly localize anatomically?',
    o: [
      'Lesser curvature at the incisura angularis',
      'Greater curvature of the distal stomach',
      'Posterior wall of the duodenal bulb',
      'Cardia and gastroesophageal junction'
    ],
    a: 1,
    hint: 'عكس القرح المزمنة اللي بتحب الـ Lesser curvature.',
    exp: 'عكس القرح المزمنة اللي بتحب الـ Lesser curvature، الـ Acute erosions بتكون متعددة وسطحية (مليمترات) وبتيجي غالباً على الـ Greater curvature في الـ Distal stomach.'
  },
  {
    id: 21,
    ch: 2,
    tag: 'Acute Gastritis Rx',
    q: 'In acute erosive gastritis, what is the minimum intraluminal gastric pH that should be maintained using intraluminal antacids to prevent further mucosal digestion?',
    o: ['pH of at least 2', 'pH of at least 3.5', 'pH of at least 5', 'pH of at least 7.4'],
    a: 2,
    hint: 'الـ Pepsin بيفقد نشاطه فوق الرقم ده.',
    exp: 'بندي مضادات حموضة موضعية (مثل aluminum hydroxide و magnesium trisilicate) عشان نحافظ على الـ pH جوه المعدة على الأقل 5، لأن فوق الرقم ده الـ Pepsin بيفقد نشاطه.'
  },
  {
    id: 22,
    ch: 2,
    tag: 'DU Pathogenesis',
    q: 'Since Helicobacter pylori can only colonize gastric-type epithelium, how does it manage to colonize the duodenum and cause a chronic duodenal ulcer?',
    o: [
      "It penetrates directly into Brunner's glands",
      'Chronic acid exposure induces focal areas of gastric metaplasia in the duodenal mucosa',
      'It migrates via the gastroduodenal lymphatics',
      'It binds exclusively to pancreatic ductal cells'
    ],
    a: 1,
    hint: 'غشاء الاثني عشر بيتحور لخلايا شبه المعدة الأول بسبب الحمض.',
    exp: 'الحمض المزمن بيعمل تحور في غشاء الاثني عشر إلى بؤر من Metaplastic epithelium فيها خلايا شبه المعدة (parietal & peptic cells)، فتستعمرها الـ H. pylori وبعدها المناطق دي بتتآكل وتقع (slough) وتسيب مكانها قرحة.'
  },
  {
    id: 23,
    ch: 2,
    tag: 'DU Epidemiology',
    q: 'What percentage of chronic duodenal ulcer patients actually exhibit true gastric hyperacidity?',
    o: ['15%', '50%', '85%', '100%'],
    a: 0,
    hint: 'نسبة أقل بكتير مما تتخيل! الـ 85% دي بتاعة H. pylori.',
    exp: 'مفاجأة في كتاب القسم: 85% من عيانين الـ DU عندهم H. pylori، لكن الـ Hyperacidity الحقيقية موجودة في 15% بس من الحالات!'
  },
  {
    id: 24,
    ch: 2,
    tag: 'DU Genetics',
    q: 'How does genetic predisposition physiologically contribute to the development of chronic duodenal ulcers?',
    o: [
      'By causing congenital absence of mucosal prostaglandins',
      'By producing a large parietal cell mass nearly double the normal',
      'By accelerating duodenal muscular peristalsis',
      'By causing primary G-cell neoplasia'
    ],
    a: 1,
    hint: 'الاستعداد الوراثي بيزود عدد مصانع الحمض للضعف تقريباً.',
    exp: 'الاستعداد الوراثي بيخلي الشخص يتولد بكتلة Parietal cell mass تقريباً ضعف الطبيعي، فإفراز الحمض يكون عالي مع أقل محفز.'
  },
  {
    id: 25,
    ch: 2,
    tag: 'Risk Factors',
    q: 'Which of the following is NOT one of the mechanisms by which smoking (nicotine) promotes peptic ulceration?',
    o: [
      'Stimulating H2 receptors to induce histamine release',
      'Increasing endogenous vasopressin causing mucosal ischemia',
      'Causing tonic spasm of the pyloric sphincter to trap acid',
      'Decreasing mucosal prostaglandin synthesis'
    ],
    a: 2,
    hint: 'النيكوتين بيعمل العكس تماماً في البواب وبيسمح بالارتجاع.',
    exp: 'النيكوتين بيعمل العكس تماماً في البواب: بيرخي الـ Pylorus فيسمح بارتجاع العصارة الصفراوية (Bile reflux) للمعدة! بالإضافة لتنشيط H2 وزيادة الـ vasopressin ونقص البروستاجلاندين وزيادة الـ free radicals.'
  },
  {
    id: 26,
    ch: 2,
    tag: 'Pathology',
    q: 'What does the term "Kissing Ulcers" refer to in the pathology of peptic ulcer disease?',
    o: [
      'Simultaneous ulcers in the gastric cardia and fundus',
      'Two duodenal bulb ulcers, one on the anterior wall and one on the posterior wall',
      'Concomitant gastric and lower esophageal ulcers',
      'Two stomal ulcers on either side of a gastrojejunostomy'
    ],
    a: 1,
    hint: 'قرحتين قصاد بعض وش في وش جوه البصلة.',
    exp: 'وجود قرحتين قصاد بعض في الـ Duodenal bulb، واحدة في الجدار الأمامي وواحدة في الخلفي، بيتسمى Kissing ulcers (Fig. 30.8).'
  },
  {
    id: 27,
    ch: 2,
    tag: 'GU Classification',
    q: "According to your department's classification of chronic gastric ulcers, where is a Type II gastric ulcer located and what is its acid profile?",
    o: [
      'At the incisura angularis with low acid',
      'On the lesser curvature at the prepyloric area on top of gastric stasis, with high acid',
      'Diffuse ulceration throughout the stomach due to NSAIDs',
      'High on the lesser curvature near the cardia with normal acid'
    ],
    a: 1,
    hint: 'ركز في تقسيمة كتاب القسم لـ Types I–V: Type II بيجي مع الـ Gastric stasis.',
    exp: 'في تقسيمة كتاب القسم: Type I (60% عند الـ Incisura وحمض قليل/طبيعي)، Type II (في الـ Prepyloric على خلفية Gastric stasis في مرضى السكر أو cicatricial DU وحمض عالي)، Type III (في الـ Antrum وحمض عالي)، Type IV (عالي جنب الـ GEJ)، Type V (منتشر بسبب NSAIDs/steroids).'
  },
  {
    id: 28,
    ch: 2,
    tag: 'GU Deformity',
    q: 'Fibrosis and scarring of a chronic "saddle-shaped" gastric ulcer overriding the lesser curvature classically results in which deformity?',
    o: [
      'Trifoliate duodenum',
      'Hourglass deformity of the stomach',
      'Linitis plastica (leather-bottle stomach)',
      'Soup-dish stomach'
    ],
    a: 1,
    hint: 'بتقسم المعدة نصين زي الساعة الرملية.',
    exp: 'القرحة اللي راكبة على الـ Lesser curvature زي السرج (Saddle ulcer) لما بتخف بتليف بتقسم المعدة نصين وتعمل Hourglass deformity of the stomach (Fig. 30.18).'
  },
  {
    id: 29,
    ch: 2,
    tag: 'GU Complications',
    q: 'How can chronic gastritis associated with a benign gastric ulcer lead to systemic generalized edema?',
    o: [
      'By causing portal vein thrombosis',
      'Through excessive mucus hypersecretion leading to hypoalbuminemia',
      'By blocking renal tubular sodium reabsorption',
      'Through direct lymphatic obstruction of the cisterna chyli'
    ],
    a: 1,
    hint: 'البروتين بيهرب من المعدة على هيئة مخاط غزير.',
    exp: 'الالتهاب المزمن المصاحب لقرحة المعدة ممكن يعمل إفراز مخاط غزير جداً (Mucus hypersecretion) يفقد الجسم البروتين ويعمل Hypoalbuminemia و generalized edema.'
  },
  {
    id: 30,
    ch: 2,
    tag: 'Pharmacology',
    q: 'How does the novel Potassium-Competitive Acid Blocker (P-CAB), Vonoprazan, inhibit gastric acid secretion?',
    o: [
      'Irreversibly binding only to active proton pumps in an acidic environment',
      'Blocking K+ ion transport in exchange with H+ ion across the parietal cell membrane',
      'Competitively blocking H2 receptors on parietal cells',
      'Inhibiting urease enzyme in H. pylori'
    ],
    a: 1,
    hint: 'اقرأ الاسم: Potassium-Competitive Acid Blocker.',
    exp: 'عقار الـ Vonoprazan (P-CAB) بيوقف إفراز الحمض عن طريق قفل تبادل أيون البوتاسيوم (K+) مع الهيدروجين (H+) عبر جدار الـ Parietal cell. أما الخيار A فده ميكانيزم الـ PPIs التقليدية.'
  },
  {
    id: 31,
    ch: 2,
    tag: 'Gastric Polyps',
    q: 'What is the most common type of non-neoplastic gastric polyp (accounting for 80% of gastric polyps), and what is its classic association?',
    o: [
      'Hamartomatous polyp associated with Peutz-Jeghers syndrome',
      'Hyperplastic polyp associated with prolonged use of PPIs',
      'Adenomatous polyp associated with familial polyposis',
      "Inflammatory fibroid polyp associated with Crohn's disease"
    ],
    a: 1,
    hint: 'بيمثل 80% وبيزيد مع الاستخدام الطويل لأدوية الحموضة.',
    exp: 'الـ Hyperplastic polyps بتمثل 80% من زوائد المعدة، وبتحصل مع الاستخدام الطويل للـ PPIs لأن قلة الحمض بتزود الـ Gastrin اللي بيعمل Mucosal hyperplasia.'
  },
  {
    id: 32,
    ch: 2,
    tag: 'Gastric Cancer Pathology',
    q: 'Which histological variant of gastric adenocarcinoma carries the worst prognosis and is characterized by excessive intracellular mucin pushing the nucleus to the periphery?',
    o: [
      'Intestinal-type tubular adenocarcinoma',
      'Diffuse signet-ring cell (colloid) carcinoma',
      'Medullary carcinoma with lymphocytic infiltration',
      'Mucinous cystadenocarcinoma'
    ],
    a: 1,
    hint: 'خلايا شبه الخاتم (Signet ring) بسبب الـ Mucin جوه الخلية.',
    exp: 'الـ Colloid carcinoma (من النوع الـ Diffuse) هي اللي خلاياها شبه الخاتم (Signet ring) بسبب الـ Intracellular mucin، وهي أسوأ أنواع سرطان المعدة في الـ Prognosis.'
  },
  {
    id: 33,
    ch: 2,
    tag: 'GIST',
    q: 'Gastrointestinal Stromal Tumors (GIST) originate from which specific cells and express which immunohistochemical marker?',
    o: [
      'Enterochromaffin-like cells; positive for Chromogranin A',
      'Interstitial cells of Cajal; positive for CD117 (c-KIT)',
      'Smooth muscle cells of muscularis mucosa; positive for Desmin',
      "Schwann cells of Auerbach's plexus; positive for S-100"
    ],
    a: 1,
    hint: 'خلايا الـ Pacemaker بتاعة حركة الأمعاء + علامة CD117.',
    exp: 'الـ GIST بيطلع من الـ Interstitial cells of Cajal (الـ Pacemaker بتاع حركة الأمعاء) بطفرة في جين الـ KIT (85%) أو PDGFRA (10%) وبيتشخص بالعلامة المناعية CD117.'
  },

  // ==================== CHAPTER 3: In The Clinic (34–53) ====================
  {
    id: 34,
    ch: 3,
    tag: 'Clinic Case 1 · History',
    q: 'دخل عليك شاب 30 سنة، وزنه زايد شوية، بيشتكي من وجع في فم المعدة. أنهي سؤال وجواب هيأكدولك إنها Chronic Duodenal Ulcer مش Gastric Ulcer؟',
    o: [
      '"الوجع بيجيلك إمتى؟" ⬅ "أول ما آكل لقمة وبخاف آكل خالص"',
      '"الوجع بيجيلك إمتى وإيه بيريحه؟" ⬅ "بيصحيني الفجر وأنا جعان، ولما باكل بسكوتة بيروح"',
      '"بترجع؟" ⬅ "برجع كل يوم بالليل أكل بايت من إمبارح"',
      '"الوجع مستمر طول السنة؟" ⬅ "آه مابيروحش ولا يوم"'
    ],
    a: 1,
    hint: 'مريض الاثني عشر مشهور بألم الجوع والليل وشايل بسكوت في جيبه.',
    exp: 'مريض الـ DU بيجيله Hunger & Night pain بعد الأكل بـ 2–3 ساعات لأن الحمض بينزل مركز من غير أكل يكوي القرحة، وبيمشي شايل بسكوت في جيبه عشان الأكل بيريحه (عكس الـ GU اللي بيخاف ياكل ويخس).'
  },
  {
    id: 35,
    ch: 3,
    tag: 'Clinic Case 1 · Clinical Alert',
    q: 'نفس العيان جالك بعدها بشهرين بيقولك: "يا دكتور، الوجع مابقاش يروح بالبسكوت ولا الفوار، وبقى مسمع في ضهري ورا!".. إيه اللي حصل للقرحة؟',
    o: [
      'Perforation into the general peritoneal cavity',
      'Posterior penetration into the pancreas',
      'Development of pyloric stenosis',
      'Transformation into MALT lymphoma'
    ],
    a: 1,
    hint: 'الألم المستمر اللي بيسمع في الضهر (Referred to back) بيدل على اختراق عضو خلف المعدة/الاثني عشر.',
    exp: 'لما وجع القرحة يبقى مستمر، مايستجيبش لمضادات الحموضة، ويسمع في الضهر (Referred to the back)، ده معناه إن القرحة الخلفية اخترقت البنكرياس (Penetrating ulcer / Chronic perforation).'
  },
  {
    id: 36,
    ch: 3,
    tag: 'Clinic Case 1 · Budget Labs',
    q: 'العيان خد كورس الـ Triple therapy لمدة أسبوعين وعايز تتأكد بأقل تكلفة وبطريقة غير جراحية إن الـ H. pylori اختفت، هتعمل التحليل إمتى وإيه هو؟',
    o: [
      'Serum IgG antibodies immediately after finishing therapy',
      'Urea breath test or fecal antigen test 4 weeks after cessation of treatment',
      'Barium meal 1 week after therapy',
      'Diagnostic laparoscopy after 6 weeks'
    ],
    a: 1,
    hint: 'ممنوع تحلل مباشرة بعد العلاج عشان الـ False negative، والـ IgG بيفضل إيجابي سنين!',
    exp: 'بنعيد اختبار الـ H. pylori بعد 4 أسابيع من وقف العلاج عشان نتجنب الـ False negative، والـ Urea breath test أو الـ Faecal antigen ممتازين وغير جراحيين.'
  },
  {
    id: 37,
    ch: 3,
    tag: 'Clinic Case 1 · Management',
    q: 'لو العيان ده فشل معاه العلاج الدوائي وقررت تعمله عملية تقفل بيها إفراز الحمض من غير ما تضطر تعمل Drainage procedure (لا Pyloroplasty ولا Gastrojejunostomy) هتختار إيه؟',
    o: [
      'Truncal vagotomy alone',
      "Highly selective vagotomy (preserving the nerve of Latarjet / crow's foot)",
      'Bilateral thoracic sympathectomy',
      'Billroth II gastrectomy'
    ],
    a: 1,
    hint: 'عملية بتحافظ على تعصيب الـ Antrum والبواب عشان المعدة تفضي طبيعي.',
    exp: "الـ Highly selective vagotomy بتقطع الفروع اللي رايحة للـ Fundus & Body بس وتقف عند الـ Crow's foot عشان تحافظ على الـ Nerve of Latarjet اللي بيغذي الـ Antrum والـ Pylorus، فالمعدة بتفضي طبيعي ومش بنحتاج عملية تصريف."
  },
  {
    id: 38,
    ch: 3,
    tag: 'Clinic Case 2 · Exam & DD',
    q: 'عيان 35 سنة بياخد مسكنات كتير جاله وجع مفاجئ عنيف في الـ Epigastrium وبعد كام ساعة الوجع تركز في الـ Right Iliac Fossa والنائب الصغير مشخصه Acute Appendicitis! إيه الممر التشريحي اللي نزل فيه السائل الحمضي وعمل الخدعة دي؟',
    o: [
      'Left paracolic gutter through the phrenocolic ligament',
      'Right paracolic gutter from the supracolic to the infracolic compartment',
      'Foramen of Winslow into the lesser sac',
      'Retroperitoneal space along the psoas muscle'
    ],
    a: 1,
    hint: 'الناحية الشمال مقفولة بالـ Phrenocolic ligament، فالسائل بيلف يمين.',
    exp: 'السائل بيتجمع الأول في الـ Supracolic compartment وبعدين ينزل في الـ Right paracolic gutter (لأن الشمال مقفول بالـ Phrenocolic ligament) فيتجمع في الـ Right iliac fossa ويقلد الزايدة بالظبط (Fig. 30.22).'
  },
  {
    id: 39,
    ch: 3,
    tag: 'Clinic Case 2 · Budget Labs',
    q: 'دخلت العيان يعمل Erect Chest X-ray عشان تشوف الـ Air under diaphragm، بس الأشعة طلعت سلبية وأنت لسه شاكك بقوة في Perforated peptic ulcer! إيه الفحص الأدق اللي هتطلبه دلوقتي؟',
    o: [
      'Barium meal with double contrast',
      'Water-soluble contrast meal (Gastrografin meal)',
      'Upper GI endoscopy with high air insufflation',
      'Technetium-99m scan'
    ],
    a: 1,
    hint: 'أوعى تدي Barium أو تنفخ هوا بالمنظار في بطن مخرومة!',
    exp: 'أوعى تدي Barium في حالات الـ Perforation عشان بيعمل التهاب بريتوني قاتل! بندي صبغة بتدوب في المية (Gastrografin meal) عشان نشوف تسريب الصبغة بره التجويف بأمان.'
  },
  {
    id: 40,
    ch: 3,
    tag: 'Clinic Case 2 · Management',
    q: 'فتحت بطن العيان ولقيت Perforated anterior duodenal ulcer، ولكن لو كانت القرحة المخرومة دي في الـ Stomach (Perforated Gastric Ulcer)، إيه الخطوة الإجبارية الزيادة اللي لازم تعملها قبل ما تقفل بالـ Omental patch؟',
    o: [
      'Total gastrectomy on the spot',
      'Taking a biopsy from the edge of the gastric ulcer',
      'Ligating the splenic artery',
      'Performing a Roux-en-Y bypass'
    ],
    a: 1,
    hint: 'قرح المعدة ليها نسبة خباثة ولازم نستبعد السرطان من الحافة.',
    exp: 'أي قرحة معدة مخرومة لازم تاخد منها Biopsy قبل ما تقفلها بالـ Omental patch، لأن قرح المعدة ممكن تكون سرطان مخروم على عكس قرح الاثني عشر.'
  },
  {
    id: 41,
    ch: 3,
    tag: 'Clinic Case 2 · Special Scenario',
    q: 'لو العيان جالك بوجع بسيط في الـ Epigastrium وفحص البطن هادي وأشعة الصبغة بينت إن الخرم صغير جداً واتقفل لوحده بسرعة (Sealed subacute perforation)، إيه القرار الصح؟',
    o: [
      'Urgent exploratory laparotomy',
      'Conservative management (NG suction, IV fluids, IV antibiotics, and IV PPIs)',
      'Immediate endoscopic stenting',
      'Discharge home on oral antacids'
    ],
    a: 1,
    hint: 'الخرم اتقفل لوحده قبل ما يلوث البريتون، فالعلاج هنا تحفظي بدون مشرط.',
    exp: 'الـ Subacute perforation بيكون خرم صغير جداً واتقفل بسرعة من غير ما يلوث البريتون، ولو اتشخص صح بيتعالج تحفظياً (NG suction + IV fluids + IV antibiotics + IV PPIs) من غير جراحة.'
  },
  {
    id: 42,
    ch: 3,
    tag: 'Clinic Case 3 · Exam & Labs',
    q: 'مريض عنده تاريخ قديم مع قرحة الاثني عشر، بقى يشتكي إن وجع القرحة القديم اختفى، بس بقى يرجع بالليل كميات كبيرة من أكل بايت مفيهوش مرارة (Non-bilious) وعنده تقلصات في إيده (Tetany). وبالفحص لقيت Visible peristalsis من الشمال لليمين و Succussion splash. إيه اضطراب الأملاح اللي عنده؟',
    o: [
      'Hypernatremic, hyperkalemic metabolic acidosis',
      'Hyponatremic, hypokalemic, hypochloremic metabolic alkalosis with hypocalcemia',
      'Normokalemic respiratory acidosis',
      'Hypercalcemic metabolic alkalosis'
    ],
    a: 1,
    hint: 'بيفقد HCl (حمض وكلور) في الترجيع.. والـ Alkalosis بيقلل الكالسيوم المتأين.',
    exp: 'انسداد مخرج المعدة (Gastric outlet obstruction) بيخلي العيان يفقد حمض الهيدروكلوريك والصوديوم والبوتاسيوم في الترجيع، فيدخل في Hyponatremic, hypokalemic, hypochloremic metabolic alkalosis، والـ Alkalosis بيقلل الكالسيوم المتأين فيعمل Tetany.'
  },
  {
    id: 43,
    ch: 3,
    tag: 'Clinic Case 3 · Budget Labs',
    q: 'في عيان الـ Pyloric stenosis، عملتله Barium meal طلعت المعدة واسعة جداً ونازلة لحد الحوض (Soup-dish appearance). ليه برضه لازم تعمل Endoscopy قبل العملية؟',
    o: [
      'Because barium cannot show delayed gastric emptying',
      'Because barium meal often misses a small pyloric carcinoma, and endoscopy allows biopsy',
      'To measure the exact pH of the duodenal bulb',
      'To dissolve the food residue with laser'
    ],
    a: 1,
    hint: 'الباريوم ممكن يفوت ورم صغير عند البواب.',
    exp: 'أشعة الباريوم بتوريك المعدة الواسعة (Soup-dish appearance) وبقايا الأكل، بس ممكن جداً تفوت ورم صغير عند البواب، عشان كده المنظار وأخد العينة أساسي لاستبعاد السرطان.'
  },
  {
    id: 44,
    ch: 3,
    tag: 'Clinic Case 3 · Management',
    q: 'النائب عايز يدخل عيان الـ Pyloric stenosis العمليات فوراً الليلة كحالة طوارئ! إيه ردك عليه كاستشاري؟',
    o: [
      '"برافو عليك، لازم نفتح فوراً قبل ما المعدة تفرقع"',
      '"غلط! الـ Pyloric stenosis مش طوارئ، لازم نحضره الأول بغسيل معدة بـ Ryle وتصليح الأملاح والأنيميا وعلاج طبيعي للصدر"',
      '"اديله حقنة كورتيزون وروحه البيت"',
      '"اعمله استئصال كلي للمعدة فوراً"'
    ],
    a: 1,
    hint: 'جملة كتاب القسم الذهبية: requires surgery but is NOT an emergency!',
    exp: 'جملة كتاب القسم الذهبية: "Pyloric stenosis requires surgery but is not an emergency and operation should never be rushed into".. التحضير الجيد (غسيل معدة بـ Ryle، تغذية/محاليل لتصليح Na/K/Cl/Ca والـ Alkalosis، نقل دم للأنيميا، علاج طبيعي للصدر) بيقلل الوفيات جداً.'
  },
  {
    id: 45,
    ch: 3,
    tag: 'Clinic Case 3 · Surgical Choice',
    q: 'بعد ما حضرت عيان الـ Cicatricial Pyloric Stenosis وبقى جاهز، إيه العملية القياسية (Standard Operation) لحالته؟',
    o: [
      'Highly selective vagotomy alone',
      'Truncal vagotomy and gastrojejunostomy',
      'Total gastrectomy with Roux-en-Y',
      'Simple omental patch repair'
    ],
    a: 1,
    hint: 'لازم نعمل تصريف bypass للانسداد الليفي مع تقليل الحمض.',
    exp: 'العملية القياسية لانسداد مخرج المعدة الحميد هي Truncal vagotomy مع Gastrojejunostomy (ولو عيان مسن وحالته الصحية متدهورة ممكن نكتفي بـ Gastrojejunostomy لوحدها أو توسيع بالبالون).'
  },
  {
    id: 46,
    ch: 3,
    tag: 'Clinic Case 4 · Clinical Signs',
    q: 'عيان 60 سنة جاي بفقدان وزن سريع وعسر هضم، وبالفحص لقيت كلكوعة فوق الترقوة الشمال (Virchow’s node / Troisier’s sign) وبالـ PR exam حسيت رف صلب في الحوض. الرف ده اسمه إيه؟ ولو كانت المريضة شابة وعندها انتشار في المبايض هيتسمى إيه؟',
    o: [
      'Sister Mary Joseph nodule & Meigs tumor',
      "Blumer's shelf (in Douglas pouch) & Krukenberg's tumors (in ovaries)",
      "Calot's node & Teratoma",
      'Grey-Turner sign & Brenner tumor'
    ],
    a: 1,
    hint: 'انتشار عبر البريتون (Trans-coelomic spread) للحوض والمبايض.',
    exp: "انتشار سرطان المعدة عبر البريتون (Trans-coelomic spread) للمبايض النشطة في السيدات الصغيرات بيعمل Krukenberg's tumours، ولما يترسب في الـ Douglas pouch بيعمل رف صلب يتحس بالـ PR اسمه Blumer's shelf."
  },
  {
    id: 47,
    ch: 3,
    tag: 'Clinic Case 4 · Budget Labs',
    q: 'عملت للعيان منظار عادي، الدكتور لقى المعدة ضيقة ومبتتفردش بالهواء بس الـ Biopsy السطحية طلعت سلبية! الأشعة المقطعية بينت Diffuse mural thickening والـ Mucosa سليمة تماماً (Linitis plastica). إيه الفحص الأفضل اللي هيحدد عمق الورم وياخد عينة عميقة (Deep biopsy)؟',
    o: [
      'Repeat superficial gastroscopy',
      'Endoscopic Ultrasound (EUS) with guided deep biopsy',
      'Serum CEA level',
      'Plain abdominal X-ray'
    ],
    a: 1,
    hint: 'جهاز سونار جوه المنظار بيشوف طبقات الجدار وياخد عينة تحت السطح السليم.',
    exp: 'الـ Linitis plastica خبيث جداً لأنه بيمشي في الـ Submucosa ويسيب الـ Mucosa سليمة فيفلت من المنظار العادي، والحل هو الـ EUS (Endoscopic Ultrasound) لأنه بيشوف سمك الجدار والعقد الليمفاوية وياخد Deep biopsy بأمان.'
  },
  {
    id: 48,
    ch: 3,
    tag: 'Clinic Case 4 · Radical Surgery',
    q: 'في حالات سرطان المعدة القابل للاستئصال، إيه تفاصيل عملية الـ Radical D2 Gastric Resection القياسية بعد الـ Neoadjuvant chemotherapy؟',
    o: [
      'شيل الورم بحافة أمان 1 سم فقط بدون استئصال الغدد',
      'شيل الورم بحافة أمان (5–6 سم فوق و3–4 سم من الاثني عشر تحت) + الـ Greater & Lesser omenta + الـ First & Second tiers of LNs + توصيل Roux-en-Y',
      'شيل المعدة والطحال والقولون المستعرض في كل الحالات',
      'عمل Gastrojejunostomy فقط بدون استئصال'
    ],
    a: 1,
    hint: 'D2 معناها استئصال المستويين الأول والثاني من الغدد الليمفاوية مع حواف أمان واسعة.',
    exp: 'الـ D2 resection بتشمل حواف أمان واسعة (5–6 سم Proximally و3–4 سم Duodenal cuff)، مع استئصال المنديلين (Greater & Lesser omenta) والـ 1st & 2nd tier LNs، والتوصيل بـ Roux-en-Y عشان نمنع ارتجاع الصفراء.'
  },
  {
    id: 49,
    ch: 3,
    tag: 'Clinic Case 4 · Incision & Extent',
    q: 'لو الورم كان موجود في الـ Cardia، إيه العملية والفتح الجراحي المطلوبين؟',
    o: [
      'Subtotal gastrectomy via upper midline incision',
      'Oesophago-gastrectomy (removing whole stomach + distal 10 cm of oesophagus) via left thoraco-abdominal incision',
      'Wedge resection via laparoscopy',
      'Billroth I partial gastrectomy'
    ],
    a: 1,
    hint: 'أورام الـ Cardia محتاجة نشيل آخر 10 سم من المريء بفتحة تشمل الصدر والبطن.',
    exp: 'أورام الـ Cardia بتحتاج استئصال المعدة بالكامل مع آخر 10 سم من المريء كحافة أمان عن طريق فتح Left thoraco-abdominal incision (صدري بطني أيسر).'
  },
  {
    id: 50,
    ch: 3,
    tag: 'Clinic Case 5 · Follow-up',
    q: 'مريض عنده Chronic Gastric Ulcer وأخدت منها 6 عينات وطلعت سليمة، حميدة بالمنظار، ومشيته على علاج دوائي مكثف لمدة 6 أسابيع والوجع اختفى تماماً. إيه الخطوة الجاية؟',
    o: [
      'وقف العلاج وروح طالما الوجع اختفى',
      'لازم تعيد المنظار بعد 6 أسابيع بغض النظر عن تحسن الأعراض للتأكد من التئام القرحة',
      'اعمله عملية استئصال معدة فوراً',
      'ماشي العيان على مسكنات مدى الحياة'
    ],
    a: 1,
    hint: 'حتى السرطان ممكن أعراضه تتحسن مؤقتاً على الأدوية!',
    exp: 'حتى سرطان المعدة ممكن أعراضه تتحسن مؤقتاً مع أدوية الحموضة! عشان كده في قرحة المعدة إعادة المنظار بعد 6 أسابيع إجبارية حتى لو العيان خف إكلينيكياً.'
  },
  {
    id: 51,
    ch: 3,
    tag: 'Clinic Case 5 · Operative Rule',
    q: 'إمتى تحكم على قرحة المعدة إنها محتاجة تدخل جراحي (Partial gastrectomy + Billroth I) بسبب عدم الالتئام؟',
    o: [
      'لو مابدأتش تلتئم عند 6 أسابيع، أو لو ماقفلش التئامها بالكامل بعد 6 شهور بحد أقصى',
      'لو ماقفلتش بعد أسبوع واحد من العلاج',
      'بعد مرور سنتين من العلاج الدوائي',
      'بمجرد تشخيصها من أول يوم'
    ],
    a: 0,
    hint: 'قاعدة الستات: 6 أسابيع لبداية الالتئام، و6 شهور للالتئام الكامل.',
    exp: 'لو مفيش أي محاولة التئام عند 6 أسابيع بنعتبرها خبيثة وندخل جراحة، ولو فيه التئام جزئي بندي فرصة كمان شهرين بس عمرنا ما بنعدي 6 شهور أبداً من غير التئام كامل.'
  },
  {
    id: 52,
    ch: 3,
    tag: 'Clinic Case 5 · GIST Medium',
    q: 'مريض عنده ورم GIST في جدار المعدة حجمه 3.5 سم، والـ Proliferative activity بتاعته 7%، ومفيش انتشار. إيه العلاج الأمثل؟',
    o: [
      'المتابعة فقط بدون جراحة',
      'استئصال موضعي للورم بحافة أمان (Local gastric resection / Wedge resection with safety margin) بدون الحاجة لتشريح العقد الليمفاوية',
      'Radical D2 total gastrectomy',
      'جلسات إشعاع ذري فقط'
    ],
    a: 1,
    hint: 'الأورام المتوسطة (2–5 سم و 5–10%) بنشيلها بحافة أمان، والـ GIST نادراً ما يروح للـ LNs.',
    exp: 'أورام الـ GIST المتوسطة (2–5 سم ونشاط 5–10%) علاجها استئصال موضعي بحافة أمان، ولأنها نادراً ما بتنتشر للـ Lymph nodes مش بنحتاج نشيل الغدد الليمفاوية.'
  },
  {
    id: 53,
    ch: 3,
    tag: 'Clinic Case 5 · GIST Advanced',
    q: 'طيب لو ورم الـ GIST كان حجمه 8 سم والـ Proliferative activity 15% أو لازق في الأعضاء المجاورة، هتبدأ بإيه قبل الجراحة؟',
    o: [
      'Conventional platinum chemotherapy',
      'Tyrosine Kinase Inhibitors (Imatinib or Sunitinib) for downgrading',
      'External beam radiotherapy',
      'Simple endoscopic polypectomy'
    ],
    a: 1,
    hint: 'أدوية موجهة (TKI) بتصغر حجم الورم قبل الجراحة.',
    exp: 'الأورام الكبيرة (> 5 سم) أو عالية النشاط (> 10%) أو غير القابلة للاستئصال أو المنتشرة بتاخد موجهات الـ Tyrosine kinase inhibitors زي الـ Imatinib أو Sunitinib قبل الجراحة لتصغير حجمها (downgrading).'
  },

  // ==================== CHAPTER 4: Differentiation Arena & Speed Round (54–68) ====================
  {
    id: 54,
    ch: 4,
    tag: 'Barium Meal Duel',
    q: 'إيه الفرق الحاسم بين الـ Ulcer niche بتاع القرحة الحميدة والقرحة الخبيثة في أشعة الباريوم في المعدة؟',
    o: [
      'القرحة الحميدة بتبرز لبره خط جدار المعدة (Projects outside the stomach line)، بينما الخبيثة بتبان جوه خط المعدة أو بره منطقة القرح المعتادة',
      'القرحة الخبيثة بتعمل Trifoliate deformity',
      'القرحة الحميدة بتقفل سريان الباريوم تماماً',
      'مفيش أي فرق بينهم في الأشعة'
    ],
    a: 0,
    hint: 'الحميدة بتحفر في الجدار السليم لبره، أما الخبيثة فمحفورة جوه كتلة ورمية بارزة لجوه.',
    exp: 'القرحة الحميدة بتحفر في جدار المعدة السليم فتبان بارزة لبره الخط ومعاها Spastic notch على الـ Greater curvature قصادها، بينما الخبيثة بتكون محفورة جوه كتلة ورمية فتبان جوه خط المعدة أو خارج الـ ulcer bearing area.'
  },
  {
    id: 55,
    ch: 4,
    tag: 'Dumping Duel',
    q: 'مريض عامل Gastrectomy بيجيله بعد الأكل بـ 20 دقيقة هبوط، سخونة في الوش، ضربات قلب سريعة، وإسهال منفجر.. بينما مريض تاني بيجيله بعد الأكل بـ 3 ساعات عرق غزير ورعشة ودوخة بتتحسن لما ياخد معلقة سكر! إيه الفرق في الميكانيزم؟',
    o: [
      'الأول عنده نقص كالسيوم والتاني عنده زيادة صوديوم',
      'الـ Early dumping بسبب سحب سوائل البلازما للأمعاء بفعل الأكل الـ Hyperosmolar، والـ Late dumping بسبب إفراز أنسولين مفرط يعمل Reactive hypoglycemia',
      'الاتنين بسبب عدوى بكتيرية في الأمعاء',
      'الأول بسبب قطع العصب السمبثاوي والتاني بسبب ارتجاع المرارة'
    ],
    a: 1,
    hint: 'الأول هبوط حجم بلازما سريع (20–30 دقيقة)، والتاني هبوط سكر تفاعلي (2–3 ساعات).',
    exp: 'في الـ Early dumping (خلال نص ساعة) الأكل المركز (Hyperosmolar) بيسحب المية من الدم للأمعاء فيقلل حجم البلازما ويعمل الأعراض الوعائية والإسهال. أما في الـ Late dumping (بعد 2–3 ساعات) السكريات بتعلي الأنسولين فجأة فيحصل هبوط سكر انعكاسي (Reactive hypoglycemia).'
  },
  {
    id: 56,
    ch: 4,
    tag: 'Recurrent Ulcer Duel',
    q: 'لو حصلت قرحة مرتجعة (Recurrent ulcer) بعد عملية قرحة سابقة وفشل العلاج الدوائي، إزاي بتختلف العملية التصحيحية لو العملية الأولى كانت Vagotomy مقابل لو كانت Gastrectomy؟',
    o: [
      'بعد الـ Vagotomy بنعمل التدوير على العصب المنسي وقطعه أو Antrectomy، وبعد الـ Gastrectomy بنعمل Vagotomy',
      'في الحالتين بنعمل Pyloroplasty',
      'بعد الـ Vagotomy بنعمل استئصال قولون، وبعد الـ Gastrectomy بنعمل تحويل مسار',
      'بنفك التوصيلة ونرجع المعدة لأصلها'
    ],
    a: 0,
    hint: 'كل عملية بتكمل الناقص من العملية الأولى.',
    exp: 'لو القرحة رجعت بعد Vagotomy بندور على Missed vagal trunk نقطعه ولو مالقيناهوش بنعمل Antrectomy؛ ولو رجعت بعد Gastrectomy بنعمل Vagotomy.'
  },
  {
    id: 57,
    ch: 4,
    tag: 'Bleeding Ulcer Duel',
    q: 'مريض بينزف من قرحة وفشل المنظار في وقف النزيف ودخلته العمليات.. إيه الفرق بين عملية قرحة الاثني عشر النزفية وقرحة المعدة النزفية؟',
    o: [
      'في الـ DU بنفتح البواب بالطول ونخيط الوعاء النزفي (Under-running sutures) ونقفل بالعرض (Pyloroplasty) مع Truncal vagotomy، أما في الـ GU فالعملية القياسية هي الـ Gastrectomy',
      'في الـ DU بنشيل المعدة كلها وفي الـ GU بنحط Omental patch',
      'في الاتنين بنربط الشريان الأورطي',
      'في الـ DU بنعمل تحويل مسار فقط'
    ],
    a: 0,
    hint: 'قرحة المعدة النزفية بتخوفنا من الخباثة ومش بتقفل بخياطة لوحدها.',
    exp: 'في الـ DU النزفية بنفتح البواب بالطول ونربط الوعاء بـ Under-running sutures ونقفل بالعرض (Pyloroplasty) + Truncal vagotomy. أما خياطة قرحة المعدة النزفية لوحدها بتفشل بنسبة عالية وممكن تكون خبيثة، عشان كده الـ Gastrectomy هو المعيار القياسي لقرحة المعدة النزفية.'
  },
  {
    id: 58,
    ch: 4,
    tag: 'Bariatric Arena',
    q: 'مريض سمنة مفرطة عنده ارتجاع مريئي شديد (Severe GERD) والـ BMI بتاعه 52، ليه عملية التكميم (LSG) مش أنسب اختيار ليه مقارنة بتحويل المسار؟',
    o: [
      'لأن التكميم عملية Reversible بترجع لوحدها',
      'لأن التكميم أقل كفاءة في الـ BMI فوق 50 وممكن يزود الـ GERD',
      'لأن التكميم بيعمل Dumping syndrome عنيف',
      'لأن التكميم بيحتاج تركيب حلقة سيليكون'
    ],
    a: 1,
    hint: 'التكميم بيحول المعدة لأنبوبة ضيقة عالية الضغط!',
    exp: 'من عيوب الـ Sleeve gastrectomy إنها عملية غير قابلة للعكس (Irreversible)، وأقل فعالية لو الـ BMI معدي 50، وبتزود الـ GERD لأنها بتحول المعدة لأنبوبة ضيقة عالية الضغط.'
  },
  {
    id: 59,
    ch: 4,
    tag: 'Bariatric Anatomy',
    q: 'في عملية تحويل المسار الكلاسيكي (LRYGB) بنقسم الـ Jejunum على بعد كام سم من الـ DJJ؟ وفي تحويل المسار المصغر (OAGB) بنوصل جيب المعدة على بعد كام سم من الـ DJJ؟',
    o: [
      'في الـ LRYGB عند 50 سم (مع توصيلة تانية على بعد 80 سم)، وفي الـ OAGB على بعد 200 سم من الـ DJJ',
      'في الاتنين على بعد 10 سم فقط',
      'في الـ LRYGB عند 300 سم وفي OAGB عند 20 سم',
      'بنوصل المعدة بالـ Ileum مباشرة'
    ],
    a: 0,
    hint: 'أرقام كتاب القسم: 50 + 80 للكلاسيكي، و200 للـ Loop المصغر.',
    exp: 'أرقام كتاب القسم مهمة جداً: في الـ LRYGB بنقطع الأمعاء على بعد 50 سم تحت الـ DJJ ونعمل التوصيلة التانية على بعد 80 سم؛ أما في الـ OAGB بنوصل Loop واحد على بعد 200 سم من الـ DJJ.'
  },
  {
    id: 60,
    ch: 4,
    tag: 'Speed Round',
    q: 'أي فصيلة دم مرتبطة بزيادة خطر الإصابة بسرطان المعدة (Gastric Adenocarcinoma)؟',
    o: ['Blood Group A', 'Blood Group O'],
    a: 0,
    exp: 'فصيلة الدم A والذكور أكثر عرضة لسرطان المعدة وراثياً (أما O فمشهورة أكتر مع قرحة الاثني عشر).'
  },
  {
    id: 61,
    ch: 4,
    tag: 'Speed Round',
    q: 'لو شاكين في ورم في الـ Cardia أو الـ Fundus، في أي وضع لازم نصور المريض أثناء عمل Barium meal؟',
    o: ['Erect position', "Trendelenburg's position"],
    a: 1,
    exp: "وضع الـ Trendelenburg (الراس لتحت) بيخلي الباريوم يرجع يملى الـ Fundus والـ Cardia فيكشف الأورام المستخبية فوق."
  },
  {
    id: 62,
    ch: 4,
    tag: 'Speed Round',
    q: 'إيه قيمة دلالة الأورام CEA في سرطان المعدة؟',
    o: ['Diagnostic screening tool', 'Better value for prognosis and follow-up rather than diagnosis'],
    a: 1,
    exp: 'الـ CEA ملوش قيمة تشخيصية مبكرة في سرطان المعدة، لكن قيمته الأساسية في الـ Prognosis والمتابعة بعد العملية.'
  },
  {
    id: 63,
    ch: 4,
    tag: 'Speed Round',
    q: "ليه أنبوبة الـ Stamm's gastrostomy لما بنسحبها بعد ما المريض يخف، الفتحة بتقفل لوحدها من غير عملية؟",
    o: [
      'Because the tract is lined by gastric mucosa',
      'Because the two purse-string sutures invert the wall, making the tract lined by serosa'
    ],
    a: 1,
    exp: 'الغرزتين الـ Purse-string بيقلبوا جدار المعدة لجوه فبيخلوا ممر الأنبوبة متبطن بـ Serosa، والـ Serosa بتلحم في بعضها فوراً أول ما تشد الأنبوبة.'
  },
  {
    id: 64,
    ch: 4,
    tag: 'Speed Round',
    q: 'جراحياً: أيهما قابل للعكس (Reversible): التكميم (LSG) أم تحويل المسار المصغر (OAGB)؟',
    o: ['Laparoscopic Sleeve Gastrectomy (LSG)', 'One Anastomosis Gastric Bypass (OAGB)'],
    a: 1,
    exp: 'في التكميم بنشيل 80% من المعدة ونرميها فمستحيل ترجع، إنما في الـ OAGB بقية المعدة موجودة في مكانها فممكن عكس العملية.'
  },
  {
    id: 65,
    ch: 4,
    tag: 'Speed Round',
    q: 'إيه نسبة الذكور للإناث (M:F ratio) في الـ Duodenal Ulcer مقارنة بالـ Gastric Ulcer حسب جدول الكتاب (Table 30.1)؟',
    o: ['5:1 in DU vs 2:1 in GU', '1:1 in DU vs 10:1 in GU'],
    a: 0,
    exp: 'في جدول المقارنة (Table 30.1): نسبة الذكور للإناث في الـ DU هي 5:1 بينما في الـ GU هي 2:1.'
  },
  {
    id: 66,
    ch: 4,
    tag: 'Speed Round',
    q: 'قرحة المعدة اللي بتيجي في مكان بعيد عن الـ Lesser curvature (خارج الـ 95% المعتادين) بتعتبر إيه لحد ما يثبت العكس؟',
    o: ['Benign stress erosion', 'Highly suspicious of malignancy'],
    a: 1,
    exp: '95% من قرح المعدة الحميدة بتقع على الـ Lesser curvature، وأي قرحة بعيدة عنه يُشتبه بقوة في خبثها لحد ما يثبت العكس بالعينات.'
  },
  {
    id: 67,
    ch: 4,
    tag: 'Speed Round',
    q: 'إيه أفضل عملية تلطيفية (Best palliative procedure) لمريض سرطان معدة متقدم بس الورم نفسه قابل للاستئصال؟',
    o: ['Palliative gastrectomy', 'Simple bypass gastrojejunostomy'],
    a: 0,
    exp: 'لو الورم Resectable حتى في الحالات المتقدمة، الـ Palliative gastrectomy هو أفضل إجراء تلطيفي لأنه بيخلص المريض من النزيف والألم والانسداد.'
  },
  {
    id: 68,
    ch: 4,
    tag: 'Speed Round',
    q: 'إمتى تحليل الهيموجلوبين والـ Haematocrit يعبروا بصدق عن كمية الدم المفقود في مريض نزيف قرحة حاد؟',
    o: [
      'Immediately within the first 5 minutes',
      'Only after a few hours when haemodilution has occurred'
    ],
    a: 1,
    exp: 'في أول النزيف المريض بيفقد دم كامل فتركيز الهيموجلوبين بيبان طبيعي، ومابينزلش غير بعد كام ساعة لما الجسم يسحب سوائل ويعمل Haemodilution.'
  },

  // ==================== CHAPTER 5: Post-Op Complications & Outcomes (69–80) ====================
  {
    id: 69,
    ch: 5,
    tag: 'Early Complication',
    q: 'On the 4th postoperative day after a Billroth II gastrectomy, a patient develops sudden severe upper abdominal pain, tachycardia, and bile-stained fluid pouring from the abdominal drain. What is the diagnosis and its primary cause?',
    o: [
      'Stomal edema due to hypoproteinemia',
      'Duodenal stump blow-out due to an inflamed/ischemic stump or afferent loop obstruction',
      'Late dumping syndrome',
      'Anastomotic line mucosal bleeding'
    ],
    a: 1,
    hint: 'اليوم الرابع بعد Billroth II + عصارة صفراوية من الدرنقة = كارثة في جذع الاثني عشر.',
    exp: 'انفجار جذع الاثني عشر (Duodenal blow-out) بيحصل عادة في اليوم الرابع بعد عملية Billroth II بسبب تليف وقصور دموي في الجذع أو انسداد الـ Afferent loop.'
  },
  {
    id: 70,
    ch: 5,
    tag: 'Complication Management',
    q: 'What is the immediate cornerstone of managing a patient with a duodenal stump blow-out who has no distal intestinal obstruction?',
    o: [
      'Immediate total pancreatectomy',
      'Immediate adequate drainage, sepsis control with antibiotics, fluid/electrolyte adjustment, and TPN or nasojejunal feeding',
      'Oral high-carbohydrate diet',
      'Endoscopic laser ablation'
    ],
    a: 1,
    hint: 'لو مفيش انسداد تحتها، الناسور بيقفل تحفظياً بالتصريف والسيطرة على العدوى والتغذية.',
    exp: 'توفير درنقة وتصريف كافي فوراً مع التحكم في العدوى والتغذية الوريدية (TPN) أو عبر أنبوبة صائمية (nasojejunal) بيقفل أغلب الحالات طالما مفيش انسداد تحتها.'
  },
  {
    id: 71,
    ch: 5,
    tag: 'Technical Error',
    q: 'Following a partial gastrectomy, a patient develops a recurrent stomal ulcer due to persistent hypergastrinemia. What technical error during the initial operation most likely caused this?',
    o: [
      'Removing the entire greater omentum',
      'Leaving a residual cuff of the alkaline gastric antrum attached to the duodenal stump',
      'Making the gastrojejunostomy stoma too wide',
      'Ligating the right gastric artery'
    ],
    a: 1,
    hint: 'خلايا الـ G-cells اتسابت في البيئة القلوية بعيد عن الحمض ففضلت تفرز Gastrin ليل نهار!',
    exp: 'لو الجراح نسي حتة من الـ Antrum موصولة بالـ Duodenum، خلايا الـ G-cells اللي فيها بتفضل معزولة عن الحمض فتفرز Gastrin ليل نهار وتعمل قرحة مرتجعة.'
  },
  {
    id: 72,
    ch: 5,
    tag: 'Late Complication',
    q: 'A patient who underwent gastrectomy 2 years ago presents with persistent epigastric burning pain and frequent bilious vomiting. Endoscopy shows diffuse fiery-red mucosal inflammation caused by bile reflux. What is the definitive cure?',
    o: [
      'Lifelong high-dose PPIs',
      'Surgical conversion to a Roux-en-Y anastomosis',
      'Truncal vagotomy',
      'Endoscopic balloon dilatation'
    ],
    a: 1,
    hint: 'الحمض مش هو السبب هنا، السبب ارتجاع الصفراء ولازم نبعدها عن المعدة.',
    exp: 'التهاب المعدة الصفراوي (Biliary / alkaline reflux gastritis) مابيخفش بالأدوية، وعلاجه الجذري هو تحويل التوصيلة لـ Roux-en-Y عشان نبعد العصارة الصفراوية عن المعدة.'
  },
  {
    id: 73,
    ch: 5,
    tag: 'Nutritional Complication',
    q: 'Which specific pulmonary infection are post-gastrectomy patients at a uniquely increased risk of developing as part of nutritional disturbances?',
    o: [
      'Pneumocystis jirovecii pneumonia',
      'Pulmonary tuberculosis (TB)',
      'Aspergilloma',
      'Bronchiectasis'
    ],
    a: 1,
    hint: 'عدوى رئوية مزمنة مشهورة في سوء التغذية ونقص الوزن الشديد بعد استئصال المعدة.',
    exp: 'سوء التغذية ونقص الوزن والفيتامينات والحديد والكالسيوم بعد استئصال المعدة بيزودوا خطر الإصابة بالدرن الرئوي (Pulmonary TB) زي ما هو مذكور صراحة في كتاب القسم.'
  },
  {
    id: 74,
    ch: 5,
    tag: 'Prognosis',
    q: 'By how many folds does the risk of developing gastric stump carcinoma increase 10–20 years after gastrectomy due to chronic biliary reflux gastritis?',
    o: [
      'No increase in risk',
      '2-fold increase',
      '4-fold increase compared to the general population',
      '50-fold increase'
    ],
    a: 2,
    hint: 'الـ H. pylori/EBV/CMV بيزودوه 3 أضعاف، أما ارتجاع الصفراء بعد العمليات فبيزوده كام ضعف؟',
    exp: 'ارتجاع العصارة الصفراوية المزمن بعد عمليات استئصال المعدة بيزود احتمالية الإصابة بسرطان المعدة 4 أضعاف بعد 10 إلى 20 سنة من العملية.'
  },
  {
    id: 75,
    ch: 5,
    tag: 'Post-Vagotomy',
    q: 'What is the proposed pathophysiological mechanism of explosive watery post-vagotomy diarrhea (which occurs in about 3% of cases)?',
    o: [
      'Overgrowth of Clostridium difficile',
      'Rapid delivery of bile acids to the colon due to dysfunction of the ileo-caecal valve',
      'Loss of pancreatic lipase secretion',
      'Hyperacidity irritating the jejunum'
    ],
    a: 1,
    hint: 'أحماض صفراوية بتوصل للقولون بسرعة نتيجة خلل في الصمام اللي بين الأمعاء الدقيقة والقولون.',
    exp: 'الإسهال المائي المنفجر بعد قطع الـ Vagus بيحصل في 3% من الحالات بسبب وصول الأحماض الصفراوية (Bile acids) بسرعة للقولون نتيجة خلل في صمام الـ Ileo-caecal valve.'
  },
  {
    id: 76,
    ch: 5,
    tag: 'Prognosis',
    q: 'What percentage of gastric adenocarcinoma patients are found to be operable at the time of surgical exploration, and what is the overall 5-year survival rate?',
    o: [
      '90% operable; 80% 5-year survival',
      'Only 40% operable; 10–20% overall 5-year survival',
      '10% operable; 1% 5-year survival',
      '75% operable; 50% 5-year survival'
    ],
    a: 1,
    hint: 'للأسف الأعراض بتتأخر فالتشخيص بيجي متأخر والنسب قليلة.',
    exp: 'للأسف عشان الأعراض المبكرة غامضة، 40% بس من العيانين بيكونوا Operable وقت الاستكشاف، ونسبة الإعاشة لـ 5 سنوات هي 10–20%.'
  },
  {
    id: 77,
    ch: 5,
    tag: 'Gastrostomy',
    q: 'Why is gastrostomy preferred over prolonged nasogastric intubation for postoperative bowel decompression in an elderly patient with chronic obstructive pulmonary disease?',
    o: [
      'It prevents anastomotic leakage completely',
      'It is more comfortable and does not interfere with deep respiration and coughing needed to prevent pulmonary complications',
      'It eliminates the need for IV fluids',
      'It prevents DVT'
    ],
    a: 1,
    hint: 'الرايل في الأنف والبلعوم بيمنع المريض الكبير ياخد نفس عميق ويكح.',
    exp: 'أنبوبة الرايل في الأنف والبلعوم بتضايق المريض المسن وتمنعه ياخد نفس عميق أو يكح، فالـ Gastrostomy بتريحه وتحميه من الالتهاب الرئوي بعد العمليات.'
  },
  {
    id: 78,
    ch: 5,
    tag: 'Bariatric Surgery',
    q: 'What is the minimum BMI threshold that indicates bariatric surgery in a patient who suffers from Metabolic Syndrome (Syndrome X)?',
    o: ['BMI ≥ 25 kg/m²', 'BMI ≥ 30 kg/m²', 'BMI ≥ 35 kg/m²', 'BMI ≥ 40 kg/m²'],
    a: 1,
    hint: 'أقل رقم في شروط جراحات السمنة التلاتة: 40 لوحده، 35 مع مرض، وكام مع Metabolic syndrome؟',
    exp: 'خلي بالك من التفرقة الدقيقة في كتاب القسم: جراحات السمنة ليها 3 أرقام: BMI ≥ 40 لوحده، أو BMI ≥ 35 مع Comorbidity، أو BMI ≥ 30 مع Metabolic syndrome.'
  },
  {
    id: 79,
    ch: 5,
    tag: 'Bariatric Workup',
    q: 'Which hormonal profile must be routinely assessed preoperatively in a patient scheduled for bariatric surgery to rule out endocrine causes of obesity?',
    o: [
      'Serum gastrin and secretin',
      'TSH, T4, and plasma cortisol',
      'Serum calcitonin and PTH',
      'Aldosterone and renin'
    ],
    a: 1,
    hint: 'بنستبعد خمول الغدة الدرقية ومتلازمة كوشينج.',
    exp: "قبل عمليات السمنة لازم نطلب TSH و T4 (لاستبعاد خمول الغدة الدرقية) و Plasma cortisol (لاستبعاد Cushing's syndrome) مع التقييم النفسي."
  },
  {
    id: 80,
    ch: 5,
    tag: 'Bleeding Indications',
    q: 'Which of the following is an absolute indication for urgent surgical intervention in a bleeding peptic ulcer?',
    o: [
      'Initial blood loss of 500 ml in a 30-year-old patient',
      'Bleeding that occurs in a patient already under adequate medical treatment, or initial bleed ≥ 2000 ml, or need for ≥ 1000 ml/day transfusion to maintain stability',
      'Presence of dark brown coffee-ground vomitus once',
      'Melena lasting for 12 hours with stable blood pressure'
    ],
    a: 1,
    hint: 'دواعي الجراحة المطلقة الأربعة: نزيف تحت العلاج، نزيف أولي 2000 مل+، نقل 1000 مل/يوم، أو ارتجاع بعد المنظار.',
    exp: 'دواعي الجراحة المطلقة الـ 4 في النزيف: نزيف حصل والمريض أصلاً على علاج دوائي كافي، نزيف أولي ≥ 2000 مل، نزيف مستمر محتاج نقل ≥ 1000 مل دم يومياً، أو ارتجاع النزيف بعد المنظار.'
  },

  // ==================== CHAPTER 6: Special Mini-Games (81–90) ====================
  {
    id: 81,
    ch: 6,
    tag: 'Equation Puzzle',
    q: 'ركّب المعادلة: (Sudden painless massive hematemesis) + (Ruptured submucosal angiomatous malformation in the stomach) + (Normal surrounding mucosa) = ؟',
    o: [
      "Dieulafoy's Lesion",
      'Mallory-Weiss Syndrome',
      'Gastric Adenocarcinoma',
      'Zollinger-Ellison Syndrome'
    ],
    a: 0,
    exp: "الـ Dieulafoy's lesion هو تشوه وعائي شرياني تحت المخاطية بينفجر ويعمل نزيف علوي عنيف جداً والمخاطية حواليه سليمة، وهو رقم 2 في الـ DD بتاع نزيف القرحة في كتاب القسم."
  },
  {
    id: 82,
    ch: 6,
    tag: 'Equation Puzzle',
    q: 'ركّب المعادلة: (Chronic atrophic gastritis with achlorhydria) + (Bacterial conversion of dietary nitrates into N-nitrosamines) + (Deficiency of Intrinsic Factor) = ؟',
    o: [
      'MALToma',
      'Pernicious Anaemia predisposing to Intestinal-type Gastric Adenocarcinoma',
      'Curling Ulcer',
      'Hyperplastic Polyp'
    ],
    a: 1,
    exp: 'غياب الحمض (Achlorhydria) بيسمح للبكتيريا تعيش في المعدة وتحول النيترات لـ N-nitrosamines المسرطنة، ومع نقص الـ Intrinsic factor بتحصل Pernicious Anaemia المؤهلة لسرطان المعدة (Intestinal type).'
  },
  {
    id: 83,
    ch: 6,
    tag: 'Equation Puzzle',
    q: 'ركّب المعادلة: (Third part of the duodenum) + (Compression anteriorly by an acutely angled Superior Mesenteric Artery) + (Mechanical bilious vomiting & gastric outlet obstruction) = ؟',
    o: [
      "Superior Mesenteric Artery (SMA) Syndrome / Wilkie's Syndrome",
      'Afferent Loop Syndrome',
      'Linitis Plastica',
      'Duodenal Blow-out'
    ],
    a: 0,
    exp: "الجزء التالت من الاثني عشر بيعدي قدامه الـ Superior mesenteric vessels، ولو ضغطت عليه بتعمل SMA / Wilkie's syndrome وانسداد ميكانيكي لمخرج المعدة والاثني عشر."
  },
  {
    id: 84,
    ch: 6,
    tag: 'Match the Lines',
    q: 'في أسباب القرحة النادرة، ما هو الاختبار التشخيصي الأدق لـ Zollinger-Ellison Syndrome وما سبب القرحة في Meckel’s Diverticulum؟',
    o: [
      'Secretin stimulation test لـ ZES، و Ectopic acid-secreting gastric mucosa بجوار الـ Ileum لـ Meckel’s',
      'Barium enema لـ ZES، و Pancreatic head tumor لـ Meckel’s',
      'Urea breath test لـ ZES، و Brunner gland hypertrophy لـ Meckel’s',
      'CEA لـ ZES، و Achlorhydria لـ Meckel’s'
    ],
    a: 0,
    exp: "Zollinger-Ellison (ورم Gastrin في البنكرياس أو G-cell hyperplasia) أدق اختبار ليه هو Secretin stimulation test؛ أما قرحة Meckel's diverticulum فسببها وجود Ectopic acid-secreting gastric mucosa في الـ Ileum، وقرحة Hyperparathyroidism سببها ارتفاع الكالسيوم اللي بيحفز الـ Gastrin والحمض."
  },
  {
    id: 85,
    ch: 6,
    tag: 'Radiology Hotspot',
    q: 'قدامك صورة Barium Meal لـ Duodenal Cap مرسومة على شكل ورقة البرسيم الثلاثية (Trifoliate / Clover-leaf deformity - Fig. 30.12 c). ما التفسير الباثولوجي لهذا المنظر؟',
    o: [
      'Normal anatomical duodenal bulb',
      'Fixed deformity of the duodenal bulb indicating chronic fibrosis and scarring of a duodenal ulcer',
      'Acute gastric volvulus',
      'Signet-ring carcinoma of the cardia'
    ],
    a: 1,
    exp: 'الـ Duodenal cap الطبيعي بيبان كمثلث أملس، ولما يحصل فيه تليف مزمن بيتشد ويعمل شكل الـ Trifoliate deformity الثابت.'
  },
  {
    id: 86,
    ch: 6,
    tag: 'Spot the Lie',
    q: 'مين بيكدب؟ (Find the EXCEPT) عن Gastric MALToma (Non-Hodgkin’s B-cell lymphoma):',
    o: [
      'بتمثل حوالي 2% من أورام المعدة الخبيثة',
      'الـ Prognosis بتاعها أحسن من الـ Adenocarcinoma',
      'أشيع ورم خبيث في المعدة بنسبة 95%',
      'بتطلع من النسيج الليمفاوي المرتبط بالغشاء المخاطي'
    ],
    a: 2,
    exp: 'الكدبة هي (أشيع ورم خبيث بنسبة 95%) لأن الـ Adenocarcinoma هو اللي بيمثل 95%، بينما الـ MALToma بتمثل 2% فقط والـ GIST 1%.'
  },
  {
    id: 87,
    ch: 6,
    tag: 'Spot the Lie',
    q: 'مين بيكدب؟ (Find the EXCEPT) عن الخصائص التي تجعل مريض قرحة نازفة يستجيب جيداً للعلاج التحفظي (Conservative treatment):',
    o: [
      'سن المريض صغير تحت 45 سنة',
      'نزيف بسيط وتاريخ مرضي قصير مع عسر الهضم',
      'المريض مسن وعنده تصلب شرايين شديد (Atherosclerosis) وتاريخ طويل مع القرحة',
      'النزيف حصل بعد أخذ مسكنات مؤخراً وتم إيقافها'
    ],
    a: 2,
    exp: 'الكدبة هي المريض المسن بتصلب الشرايين؛ لأن شرايينه ناشفة مابتعرفش تنقبض عشان توقف النزيف ومابيتحملش الـ Shock، فده محتاج تدخل جراحي مبكر (Relative indication).'
  },
  {
    id: 88,
    ch: 6,
    tag: 'Spot the Lie',
    q: 'مين بيكدب؟ (Find the EXCEPT) عن فشل تفريغ المعدة بعد العمليات (Postoperative Stomal Obstruction):',
    o: [
      'أغلب الحالات سببها ورم مائي (Oedema) في مكان التوصيلة وبتخف بالـ Ryle والمحاليل',
      'ممكن تحصل بسبب خطأ جراحي أو بروز غشاء الـ Antrum المتضخم',
      'ممكن تحصل بعد الـ Vagotomy رغم إن التوصيلة سالكة بسبب كسل المعدة (Atonic stomach)',
      'كل حالات الـ Stomal obstruction لازم تدخل عمليات تاني في نفس اليوم لفك التوصيلة'
    ],
    a: 3,
    exp: 'الكدبة هي دخول العمليات في نفس اليوم لكل الحالات؛ لأن أغلب الحالات سببها Oedema أو Atonic stomach وبتستجيب للعلاج التحفظي بشفط المعدة والمحاليل الوريدية بدون جراحة.'
  },
  {
    id: 89,
    ch: 6,
    tag: 'Spot the Lie',
    q: 'مين بيكدب؟ (Find the EXCEPT) عن علاقة الفيروسات والبكتيريا بسرطان المعدة:',
    o: [
      'الإصابة بـ H. pylori بتزود خطر سرطان المعدة 3 أضعاف',
      'فيروس الـ Epstein-Barr (EBV) والـ Cytomegalovirus (CMV) مرتبطين بزيادة خطر سرطان المعدة',
      'قرحة الاثني عشر المزمنة بتتحول لسرطان بنفس نسبة قرحة المعدة تماماً',
      'التهاب المعدة الضموري المزمن بيسمح للبكتيريا بتكوين مادة N-nitrosamines المسرطنة'
    ],
    a: 2,
    exp: 'الكدبة هي تحول قرحة الاثني عشر لسرطان بنفس النسبة! تحول قرحة الاثني عشر لسرطان نادر جداً على عكس قرحة المعدة، وده سؤال نصاً في امتحانات السنين السابقة.'
  },
  {
    id: 90,
    ch: 6,
    tag: 'Spot the Lie',
    q: 'مين بيكدب؟ (Find the EXCEPT) عن عملية حزام المعدة (Gastric Banding):',
    o: [
      'استخدامها بيقل جداً خلال العقد الأخير',
      'كفاءتها أقل في التحكم في السمنة والأمراض المصاحبة',
      'مصحوبة بمضاعفات متعددة بسبب وجود جسم غريب',
      'هي العملية رقم 1 والأكثر إجراءً في العالم حالياً'
    ],
    a: 3,
    exp: 'الكدبة هي إنها رقم 1 عالمياً؛ العملية الأكثر شيوعاً عالمياً هي التكميم (LSG)، بينما حزام المعدة في تراجع مستمر.'
  },

  // ==================== CHAPTER 7: Night Shift Triage & Pimp Questions (91–95) ====================
  {
    id: 91,
    ch: 7,
    tag: 'Night Shift Triage',
    q: 'الساعة 2 بالليل في الطوارئ ودخل 3 عيانين في نفس اللحظة: (1) شاب عنده Perforated DU من 4 ساعات وبطنه Board-like rigid وضغطه 90/60. (2) راجل عنده Pyloric stenosis بيرجع من شهر، جفاف شديد و Alkalosis و K+ = 2.4. (3) سيدة بقرحة معدة نازفة فقدت 2200 مل دم وضغطها بيقع رغم نقل الدم وفشل المنظار. ما خطة التدخل الجراحي الطارئ الصح؟',
    o: [
      'المريض 3 والمريض 1 يدخلوا العمليات فوراً بعد الإنعاش السريع، بينما المريض 2 يُمنع من دخول العمليات الليلة ويتحجز في الرعاية لتصليح الأملاح وغسيل المعدة الأول',
      'المريض 2 يدخل العمليات أول واحد قبل أي تحضير',
      'الثلاث مرضى ياخدوا علاج بالبيت ويتابعوا في العيادة بعد أسبوع',
      'المريض 1 والمريض 2 يدخلوا العمليات فوراً والمريض 3 يستنى للصبح'
    ],
    a: 0,
    exp: 'النزيف المستمر العنيف (> 2000 مل) والـ Perforation طوارئ جراحية، لكن الـ Pyloric stenosis مش طوارئ؛ لو دخل العمليات وهو جاف والـ K+ واقع 2.4 هيموت على الترابيزة!'
  },
  {
    id: 92,
    ch: 7,
    tag: 'Pimp Question 1',
    q: 'أستاذ الجراحة في الراوند بيسألك: "يا ابني، ليه لما بنعمل Pyloroplasty بنفتح البواب بالطول (Longitudinally) ونقفله بالعرض (Transversely)؟ لو قفلناه بالطول زي ما فتحناه هيحصل إيه؟"',
    o: [
      'لو قفلناه بالطول هيحصل ضيق (Stricture) مكان الغرز، إنما فتحه بالطول وقفله بالعرض بيكسر حلقة العضلة العاصرة ويوسع مخرج المعدة تماماً (Heineke-Mikulicz principle)',
      'عشان شكل الغرز يكون جمالي بس',
      'عشان نزود حمض المعدة',
      'لو قفلناه بالعرض هيحصل Duodenal atresia'
    ],
    a: 0,
    exp: 'فتح البواب بالطول وقفله بالعرض (Heineke-Mikulicz principle) بيكسر حلقة العضلة العاصرة ويوسع مخرج المعدة تماماً، بينما قفله بالطول بيعمل Stricture.'
  },
  {
    id: 93,
    ch: 7,
    tag: 'Pimp Question 2',
    q: 'أستاذ الجراحة بيسألك: "تقدر تقولي ليه المعدة الطبيعية مابتهضمش نفسها رغم إن الـ HCl بتاعها يقدر يدوب مسمار حديد، بينما الـ Antrum والـ Duodenum هم اللي بيتقرحوا؟"',
    o: [
      'لأن الـ Proximal acid-secreting mucosa محمية بـ Mucosal barrier قوي (مخاط، بيكربونات، تجدد خلايا سريع، وتدفق دموي بـ Prostaglandins) ومصممة لتحمل الحمض، لكنها بتهضم الأغشية المجاورة اللي مش مجهزة بنفس القوة (Alkaline antrum, Duodenum, Lower esophagus)',
      'لأن المعدة العليا مفيهاش أعصاب خالص',
      'لأن الـ HCl بيتفرز في الاثني عشر فقط',
      'لأن الخلايا العضلية بتمنع الحمض يلمس المخاطية'
    ],
    a: 0,
    exp: 'الـ Proximal acid-secreting mucosa محمية بـ Mucosal barrier قوي، لكنها تهضم الأغشية المجاورة القلوية أو غير المجهزة زي الـ Antrum والـ Duodenum وأسفل المريء في الـ GERD.'
  },
  {
    id: 94,
    ch: 7,
    tag: 'Pimp Question 3',
    q: 'أستاذ الجراحة بيسألك: "عيان جالك بـ Early Dumping Syndrome بعد عملية معدة.. تقوله يشرب المية والعصير إمتى؟ وإيه شكل الأكل بتاعه؟"',
    o: [
      'ياكل وجبات صغيرة متكررة، غنية بالبروتين والدهون وقليلة الكربوهيدرات، ويشرب السوائل بين الوجبات فقط (مش مع الأكل) عشان مايسرعش نزول محلول Hyperosmolar للأمعاء',
      'ياكل وجبة واحدة ضخمة غنية بالسكريات ويشرب لتر عصير مع الأكل',
      'يصوم عن البروتين والدهون تماماً',
      'يشرب سوائل مركزة بعد الأكل مباشرة وينام'
    ],
    a: 0,
    exp: 'النظام الذهبي لـ Early Dumping: وجبات صغيرة متكررة، عالية البروتين والدهون ومنخفضة الكربوهيدرات، والسوائل بين الوجبات فقط مش أثناء الأكل.'
  },
  {
    id: 95,
    ch: 7,
    tag: 'Pimp Question 4',
    q: 'أستاذ الجراحة بيسألك: "قولي إيه نوعين الأنابيب المشهورين اللي ليهم راس عاملة زي عيش الغراب (Mushroom head) وبنركبهم في عملية Stamm’s Gastrostomy؟"',
    o: [
      'Malecot tube أو de Pezzar tube',
      'Ryle tube أو Sengstaken tube',
      'Foley catheter أو Nelaton catheter',
      'Endotracheal tube أو Chest tube'
    ],
    a: 0,
    exp: "في عملية Stamm's gastrostomy التقليدية بنستخدم أنبوبة بـ Mushroom head زي الـ Malecot tube أو de Pezzar tube وبنثبتها بغرزتين Purse-string حرير."
  },

  // ==================== CHAPTER 8: Final Boss - Actual Past Exams (96–100) ====================
  {
    id: 96,
    ch: 8,
    tag: 'Formative 2024',
    source: 'Formative 2024',
    q: '[Formative 2024] All of the following are true regarding peptic ulcer disease EXCEPT:',
    o: [
      'Elective hospital admissions for uncomplicated peptic ulcer have decreased with PPIs',
      'Admissions for bleeding gastric ulcers have decreased over the past several years',
      'Helicobacter pylori and NSAIDs are the major etiological factors',
      'Upper GI endoscopy is the gold standard for diagnosis and biopsy'
    ],
    a: 1,
    exp: 'دخول المستشفيات الاختياري (Elective) قل بفضل أدوية الـ PPIs، لكن دخول الطوارئ بسبب مضاعفات ونزيف القرح مأظهرش انخفاض يذكر بسبب زيادة استخدام الـ NSAIDs في كبار السن.'
  },
  {
    id: 97,
    ch: 8,
    tag: 'End 2025 & Final 2026',
    source: 'End 2025 & Final 2026',
    q: '[End 2025 & Final 2026] Why is Linitis plastica considered a very dangerous pathological type of gastric carcinoma?',
    o: [
      'It always presents with massive early hematemesis in young patients',
      'The mucous membrane is intact, and the lesion may be missed by endoscopy',
      'It is completely benign and never metastasizes',
      'It responds only to antacids without surgery'
    ],
    a: 1,
    exp: 'لأنه بينتشر تحت الغشاء المخاطي (Submucosal transmural spread) من غير ما يخترق الـ Mucosa، فممكن الدكتور يدخل بالمنظار ويشوف السطح سليم وماياخدش باله منه.'
  },
  {
    id: 98,
    ch: 8,
    tag: 'End 2026 Round A,B & C,D',
    source: 'End 2026 Round A,B & C,D',
    q: '[End 2026 Round A,B & C,D] The following are risk factors for chronic duodenal ulcers EXCEPT:',
    o: [
      'Genetic predisposition',
      'Bile reflux into the stomach',
      'Hyperparathyroidism',
      'Helicobacter pylori infection'
    ],
    a: 1,
    exp: 'ارتجاع العصارة الصفراوية للمعدة (Bile reflux) بيكسر حاجز المعدة ويعمل Gastric ulcer، لكنه مش من أسباب قرحة الاثني عشر.'
  },
  {
    id: 99,
    ch: 8,
    tag: 'Final 2025',
    source: 'Final 2025',
    q: '[Final 2025] What is the largest artery supplying the stomach, and what is the most accurate diagnostic test for Zollinger-Ellison syndrome?',
    o: [
      'Right gastric artery & Urea breath test',
      'Left gastric artery & Secretin stimulation test',
      'Gastroduodenal artery & Barium meal',
      'Short gastric arteries & Serum CEA'
    ],
    a: 1,
    exp: 'أكبر شريان للمعدة هو الـ Left gastric artery اللي طالع مباشر من الـ Coeliac trunk، وأدق اختبار لتشخيص الـ Gastrinoma (ZES) هو الـ Secretin stimulation test.'
  },
  {
    id: 100,
    ch: 8,
    tag: 'End 2025, 2026 & Final 2025',
    source: 'End 2025, 2026 & Final 2025',
    q: '[Pediatric Duodenal Gem - End 2025, 2026 & Final 2025] A "double bubble sign" on an abdominal radiograph in an infant is characteristic of:',
    o: [
      'Pyloric stenosis in adults',
      'Congenital Duodenal Atresia',
      'Hourglass stomach',
      'Sliding hiatal hernia'
    ],
    a: 1,
    exp: 'أشهر سؤال أطفال مشترك مع الاثني عشر في كل امتحانات الجراحة: فقاعة الهوا الأولى في المعدة والتانية في الجزء الأول المتمدد من الاثني عشر قبل الانسداد الخلقي (Congenital Duodenal Atresia).'
  },

  // ==================== TEXTBOOK BONUS GEMS (101–108) Covering Every Remaining Textbook Detail ====================
  {
    id: 101,
    ch: 1,
    tag: 'Textbook Gem · Venous & Duodenum',
    q: '[تغطية كتاب القسم ص 683-686] The left gastric vein anastomoses with the lower oesophageal venous plexus, creating a portosystemic shunt that drains into the systemic circulation via which vein? And which arteries supply the proximal vs distal halves of the duodenum?',
    o: [
      'Azygos vein; proximal half by superior pancreaticoduodenal a. (from gastroduodenal) & distal half by inferior pancreaticoduodenal a. (from SMA)',
      'Internal iliac vein; proximal half by splenic a. & distal half by IMA',
      'Renal vein; entire duodenum by left gastric a.',
      'Superior vena cava directly; entire duodenum by coeliac trunk'
    ],
    a: 0,
    hint: 'الـ Left gastric vein بيعمل دوالي المريء لما يصب في الـ Azygos!',
    exp: 'الـ Left gastric vein بيتصل بضفيرة أسفل المريء ويصرف في الـ Azygos vein. أما الاثني عشر (أطواله: 2, 3, 4, 1 بوصة) فنصفه العلوي من Superior pancreaticoduodenal (فرع Gastroduodenal) ونصفه السفلي من Inferior pancreaticoduodenal (فرع SMA).'
  },
  {
    id: 102,
    ch: 2,
    tag: 'Textbook Gem · Benign Neoplasms',
    q: '[تغطية كتاب القسم ص 714] What is the "Operculum" sign of a benign gastric neoplasm (like leiomyoma or adenoma) on barium meal, and what is the risk of malignant transformation in benign gastric neoplasms?',
    o: [
      'A smooth filling defect whose overlying mucosal dome ulcerates ("operculum"); malignant transformation occurs in 10–30% of cases',
      'A jagged apple-core stricture; 0% malignant transformation',
      'Air under the diaphragm; 90% malignant transformation',
      'Trifoliate duodenal bulb; 1% malignant transformation'
    ],
    a: 0,
    hint: 'الورم الحميد بيعمل Smooth filling defect وقمة المخاطية فوقه بتتقرح.',
    exp: 'الأورام الحميدة في المعدة بتظهر في الباريوم كـ Smooth filling defect مع تقرح في قمة المخاطية المغطية لها (Operculum)، ونسبة تحولها لخبيثة من 10 إلى 30%.'
  },
  {
    id: 103,
    ch: 5,
    tag: 'Textbook Gem · Bariatric Classification',
    q: '[تغطية كتاب القسم ص 723-724] According to Table 30.2 in your department textbook, what is the Egyptian obesity prevalence (>18 years) and how are Obesity Class II and Super-morbid obesity defined by BMI?',
    o: [
      '40% prevalence; Obesity Class II (Severe) is BMI 35.0–39.9 and Super-morbid obesity is BMI > 50.0 kg/m²',
      '10% prevalence; Obesity Class II is BMI 25–29.9 and Super-morbid is > 35',
      '75% prevalence; Obesity Class II is BMI 40–49.9',
      '5% prevalence; Super-morbid is BMI > 30'
    ],
    a: 0,
    hint: 'الأرقام في Table 30.2 ص 724: مصر 40%، و Super-morbid فوق 50.',
    exp: 'نسبة السمنة في مصر فوق 18 سنة هي 40% (BMI > 30). وتقسيمة Table 30.2: Obesity I (30–34.9)، Severe/Class II (35–39.9)، Morbid/Class III (40–49.9)، و Super-morbid (> 50).'
  },
  {
    id: 104,
    ch: 8,
    tag: 'Textbook Boss · Gastric Cancer Incidence & Vagotomy',
    q: '[تغطية كتاب القسم ص 697 & 715] What is the gastric adenocarcinoma incidence in Egypt vs Japan, and what happens to gastric HCl reduction over time after a complete truncal vagotomy?',
    o: [
      'Egypt 1/10,000 vs Japan 7/10,000; immediate HCl reduction is 80% then drops to ~50% over time with 5–10% recurrence rate',
      'Egypt 7/10,000 vs Japan 1/10,000; 100% permanent elimination of HCl',
      'Egypt 5/10,000 vs Korea 1/10,000; 10% HCl reduction only',
      'Equal incidence worldwide; 90% recurrence rate after vagotomy'
    ],
    a: 0,
    exp: 'معدل سرطان المعدة في مصر 1/10,000 مقابل اليابان 7/10,000 وكوريا الجنوبية 4/10,000. وبعد الـ Truncal vagotomy بيقل الـ HCl فوراً بنسبة 80% ثم يتراجع الانخفاض لحوالي 50% بمرور الوقت دون التأثير على النتائج المتأخرة، ونسبة الارتجاع 5–10%.'
  },
  {
    id: 105,
    ch: 8,
    tag: 'Textbook Boss · PEG vs Stamm',
    q: '[تغطية كتاب القسم ص 722-723] Which statement accurately describes Percutaneous Endoscopic-assisted Gastrostomy (PEG) technique?',
    o: [
      'A gastroscope inflates the stomach and transilluminates through the anterior abdominal wall; under local anesthesia a trocar/cannula enters the stomach and a balloon-retained tube is placed',
      'It requires a large upper midline laparotomy under general anesthesia and two silk purse-string sutures',
      'It uses a Malecot tube inserted blindly without endoscopy',
      'It is placed via the right iliac fossa into the cecum'
    ],
    a: 0,
    exp: 'في الـ PEG بننفخ المعدة بالمنظار ونشوف إضاءته (Transillumination) عبر جدار البطن، وتحت مخدر موضعي بندخل Trocar & cannula ونثبت الأنبوبة بنفخ البالون (عكس Stamm المفتوحة بـ Malecot/de Pezzar في الـ LUQ).'
  },
  {
    id: 106,
    ch: 5,
    tag: 'Textbook Gem · Bleeding Operation Timing',
    q: '[تغطية كتاب القسم ص 708] When surgery is indicated for a bleeding peptic ulcer, within what timeframe should the decision to operate be made to avoid high mortality?',
    o: [
      'Within 48–72 hours (early decision)',
      'After 14 days of continuous bleeding',
      'Only after 30 days of ICU stay',
      'Within 3 months'
    ],
    a: 0,
    exp: 'قرار الجراحة في نزيف القرحة لازم يتاخد بدري خلال 48–72 ساعة لأن نتائج الجراحة المتأخرة سيئة ونسبة وفياتها عالية.'
  }
];
