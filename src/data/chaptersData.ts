import {
  ClinicCase,
  EquationPuzzle,
  Flashcard,
  MatchPair,
  PimpQuestion,
  RadiologyHotspot,
  SpotLieItem,
  TriageScenario,
} from '../types/game';

export const CHAPTER_0_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    frontTitle: 'التقسيم الوظيفي للمعدة',
    frontBadge: 'Proximal vs Antrum',
    keyNumber: 'HCl vs Gastrin',
    backContent:
      'الـ Proximal stomach (Fundus & Body) حامضية وبتفرز HCl (من Parietal cells) والـ Pepsinogen (من Chief cells) والـ Intrinsic factor. بينما الـ Antrum قلوي وبيفرز Gastrin من Neuro-endocrine cells ومفيش فيه Parietal cells!'
  },
  {
    id: 'fc-2',
    frontTitle: 'تشريح الاثني عشر وأطواله',
    frontBadge: 'Duodenum 4 Parts',
    keyNumber: '2 · 3 · 4 · 1 in',
    backContent:
      'الـ Duodenum كله Retroperitoneal ما عدا أول بوصة بس من الجزء الأول (Duodenal Bulb/Cap) هي اللي Intraperitoneal! أطوال الأجزاء بالترتيب: 2، 3، 4، 1 بوصة. والـ Major duodenal papilla في نص الجزء التاني تفصل بين الـ Foregut (Coeliac) والـ Midgut (SMA).'
  },
  {
    id: 'fc-3',
    frontTitle: 'تقسيمة كتاب القسم لقرح المعدة',
    frontBadge: 'Gastric Ulcer Types I–V',
    keyNumber: 'Type I = 60%',
    backContent:
      'Type I (60% عند Incisura، حمض قليل/طبيعي) · Type II (Prepyloric على Gastric stasis، حمض عالي) · Type III (Antrum، حمض عالي) · Type IV (عالي جنب الـ GEJ) · Type V (منتشر بسبب NSAIDs/Steroids).'
  },
  {
    id: 'fc-4',
    frontTitle: 'الشرايين والأعصاب الحرجة',
    frontBadge: 'Vessels & Vagus',
    keyNumber: 'Left Gastric = Largest',
    backContent:
      'أكبر شريان للمعدة هو Left gastric (من Coeliac). ورا الجزء الأول للـ Duodenum فيه CBD و Gastroduodenal artery (ينزف بعنف في القرحة الخلفية). قطع Hepatic branch للـ Anterior vagus يعمل Biliary dyskinesia وحصوات مرارة.'
  },
  {
    id: 5 + '-fc',
    frontTitle: 'فزورة الـ H. pylori والأحماض',
    frontBadge: 'Pathogenesis & pH',
    keyNumber: '85% vs 15%',
    backContent:
      '85% من مرضى الـ DU عندهم H. pylori لكن 15% بس عندهم True hyperacidity! البكتيريا بتفرز Urease (أمونيا ترفع Gastrin)، و Protease (يدمر المخاط)، و Oxidase (Free radicals). وإفراز الـ Gastrin بيقف بالـ Negative feedback لما الـ pH ينزل تحت 2.'
  },
  {
    id: 'fc-6',
    frontTitle: 'قوانين الطوارئ والمحظورات',
    frontBadge: 'Perforation & Obstruction',
    keyNumber: 'Never Barium!',
    backContent:
      'ممنوع Barium في الـ Perforation (نستخدم Gastrografin)، ولو القرحة المخرومة في المعدة لازم Biopsy قبل Omental patch! أما الـ Pyloric stenosis فبتحتاج جراحة بس مش طوارئ؛ لازم غسيل معدة وتصليح K+ والـ Alkalosis الأول.'
  },
  {
    id: 'fc-7',
    frontTitle: 'قاعدة الـ 6 لقرحة المعدة',
    frontBadge: 'GU Follow-up Rule',
    keyNumber: '6 wks / 6 mos',
    backContent:
      'إعادة المنظار بعد 6 أسابيع إجبارية حتى لو الألم اختفى! لو مابدأتش تلتئم عند 6 أسابيع تدخل جراحة (Partial gastrectomy + Billroth I)، ولو التأمت جزئياً نكمل شهرين بس أبداً مانعديش 6 شهور بدون التئام كامل.'
  },
  {
    id: 'fc-8',
    frontTitle: 'سرطان المعدة و الـ GIST',
    frontBadge: 'Neoplasms & Markers',
    keyNumber: '95% · 2% · 1%',
    backContent:
      'الـ Adenocarcinoma 95% (والـ Diffuse/Linitis plastica سليم الـ Mucosa فيحتاج EUS، والـ Signet-ring أسوأ إنذار). الـ MALToma 2%. الـ GIST 1% من خلايا Cajal موجب لـ CD117؛ فوق 5 سم أو نشاط >10% ياخد Imatinib قبل الجراحة.'
  },
  {
    id: 'fc-9',
    frontTitle: 'مقارنة الـ Dumping المبكر والمتأخر',
    frontBadge: 'Post-Gastrectomy',
    keyNumber: '30 min vs 3 hrs',
    backContent:
      'Early Dumping (خلال 20–30 دقيقة): أكل Hyperosmolar يسحب البلازما للأمعاء -> هبوط وإسهال منفجر (الحل: وجبات صغيرة قليلة السكر وسوائل بين الوجبات). Late Dumping (2–3 ساعات): أنسولين مفرط -> Reactive hypoglycemia (تتحسن بسكر).'
  },
  {
    id: 'fc-10',
    frontTitle: 'أرقام جراحات السمنة الحاسمة',
    frontBadge: 'Bariatric Rules',
    keyNumber: '40 · 35 · 30',
    backContent:
      'شروط الجراحة: BMI ≥ 40، أو ≥ 35 مع Comorbidity، أو ≥ 30 مع Metabolic syndrome. قبلها نطلب TSH, T4, Plasma cortisol. الـ LRYGB (50 سم + 80 سم، غير منعكسة)، الـ OAGB (200 سم Loop، قابلة للعكس)، الـ LSG (تشيل 80%، تزود GERD).'
  },
];

export const CLINIC_CASES: ClinicCase[] = [
  {
    id: 'case-1',
    title: 'الحالة الأولى: الراجل اللي شايل بسكوت في جيبه',
    subtitle: 'Chronic Duodenal Ulcer & Complications',
    patientName: 'الأستاذ كريم',
    age: 30,
    appearance: 'وزنه زايد شوية وبصحة عامة جيدة',
    chiefComplaint: 'حرقان ووجع عميق في فم المعدة (Epigastrium) بيروح وبيرجع على فترات.',
    vitals: { bp: '120/80', hr: 78, temp: '36.9°C', spo2: '99%', statusLabel: 'مستقر' },
    linkedQuestionIds: [34, 35, 36, 37],
    station1Prompt: 'دخل عليك الأستاذ كريم العيادة. أنهي سؤال وجواب هيأكدولك إنها Chronic Duodenal Ulcer مش Gastric Ulcer؟',
    station1Options: [
      {
        label: 'الوجع بيجيلك إمتى؟ ⬅ أول ما آكل لقمة وبخاف آكل خالص',
        patientReply: 'لا يا دكتور بالعكس، أنا باكل كويس جداً ومش بخس!',
        isOptimal: false,
        feedback: 'الألم أول ما ياكل لقمة والخوف من الأكل ده وصف الـ Gastric Ulcer مش الـ Duodenal.'
      },
      {
        label: 'الوجع بيجيلك إمتى وإيه بيريحه؟ ⬅ بيصحيني الفجر وأنا جعان، ولما باكل بسكوتة بيروح',
        patientReply: 'أيوة بالظبط يا دكتور! دايماً شايل باكو بسكوت في جيبي عشان وجع الفجر.',
        isOptimal: true,
        feedback: 'تشخيص ممتاز! Hunger & Night pain بعد الأكل بـ 2–3 ساعات بيريح بالأكل ومضادات الحموضة = DU كلاسيكي.'
      },
      {
        label: 'بترجع؟ ⬅ برجع كل يوم بالليل أكل بايت من إمبارح',
        patientReply: 'لا مفيش ترجيع أكل بايت خالص يا دكتور.',
        isOptimal: false,
        feedback: 'ترجيع الأكل البايت بالليل ده علامة Pyloric stenosis مش قرحة بسيطة.'
      },
      {
        label: 'الوجع مستمر طول السنة؟ ⬅ آه مابيروحش ولا يوم',
        patientReply: 'لا ده بييجي كام أسبوع ويختفي شهور لوحده.',
        isOptimal: false,
        feedback: 'الـ DU بيتميز بـ Marked periodicity (أسابيع نشاط يعقبها شهور هدوء).'
      }
    ],
    station2Alert: 'بعد شهرين رجعلك الأستاذ كريم بيقولك: "يا دكتور الوجع مابقاش يروح بالبسكوت ولا الفوار، وبقى مسمع في ضهري ورا!"',
    station2Findings: [
      'ألم مستمر لا يهدأ بمضادات الحموضة',
      'انتشار الألم للخلف (Referred to the back)',
      'بطن لينة نسبياً بدون علامات انفجار عام في البريتون'
    ],
    station2Question: 'إيه التفسير الإكلينيكي للتغير المفاجئ ده في طبيعة الألم؟',
    station2Options: [
      'Perforation into the general peritoneal cavity',
      'Posterior penetration into the pancreas',
      'Development of pyloric stenosis',
      'Transformation into MALT lymphoma'
    ],
    station2Answer: 1,
    station2Exp: 'فقدان الاستجابة للبسكوت والفوار + ألم مستمر مسمع في الضهر = Posterior penetration into the pancreas (Chronic perforation).',
    station3Budget: 500,
    station3Prompt: 'العيان خد كورس الـ Triple therapy لمدة أسبوعين. اختار الفحص الأدق والأوفر لتأكيد اختفاء الـ H. pylori وتوقيته الصح:',
    station3Labs: [
      {
        id: 'lab-1a',
        name: 'Serum IgG antibodies فوراً بعد العلاج',
        cost: 150,
        isOptimal: false,
        resultText: 'IgG: Positive (قد يظل إيجابياً لسنوات بعد الشفاء!)',
        feedback: 'فخ امتحان! الأجسام المضادة IgG لا تفرق بين العدوى الحالية والسابقة.'
      },
      {
        id: 'lab-1b',
        name: 'Urea breath test / Fecal antigen بعد 4 أسابيع من وقف العلاج',
        cost: 220,
        isOptimal: true,
        resultText: 'Negative — تم القضاء على H. pylori بنجاح (دقة ممتازة وبدون False negative).',
        feedback: 'اختيار ذهبي! بننتظر 4 أسابيع بعد وقف المضادات والـ PPIs لتجنب الـ False negative.'
      },
      {
        id: 'lab-1c',
        name: 'Barium meal بعد أسبوع من العلاج',
        cost: 300,
        isOptimal: false,
        resultText: 'Barium لا يكشف وجود البكتيريا.',
        feedback: 'الباريوم أشعة شكلية ومش بتحدد وجود H. pylori.'
      },
      {
        id: 'lab-1d',
        name: 'Diagnostic laparoscopy بعد 6 أسابيع',
        cost: 900,
        isOptimal: false,
        resultText: 'إجراء جراحي مكلف وغير مبرر!',
        feedback: 'خارج الميزانية ومبالغ فيه تماماً، إحنا عايزين فحص غير جراحي.'
      }
    ],
    station4Prompt: 'فشل العلاج الدوائي لاحقاً، وقررت تعمله عملية تقفل إفراز الحمض بدون ما تضطر تعمل Drainage procedure (لا Pyloroplasty ولا Gastrojejunostomy). قرارك إيه؟',
    station4Options: [
      'Truncal vagotomy alone',
      "Highly selective vagotomy (preserving nerve of Latarjet / crow's foot)",
      'Bilateral thoracic sympathectomy',
      'Billroth II gastrectomy'
    ],
    station4Answer: 1,
    station4Exp: "الـ Highly selective vagotomy بتقطع أعصاب الـ Body & Fundus بس وتسيب الـ Nerve of Latarjet (crow's foot) سليم للـ Antrum والبواب، فمش بنحتاج عملية تصريف."
  },
  {
    id: 'case-2',
    title: 'الحالة الثانية: بطن زي اللوح الخشب',
    subtitle: 'Perforated Peptic Ulcer Emergency',
    patientName: 'الأستاذ محمود',
    age: 35,
    appearance: 'شاحب، متعرق، ومثني ركبتيه من شدة الألم',
    chiefComplaint: 'ألم مفاجئ عنيف كأنه طعنة سكين في فم المعدة بعد تناول مسكنات بكثرة.',
    vitals: { bp: '100/65', hr: 118, temp: '37.8°C', spo2: '97%', statusLabel: 'حالة حرجة' },
    linkedQuestionIds: [38, 39, 40, 41],
    station1Prompt: 'في الطوارئ بتسأل الأستاذ محمود عن تفاصيل الوجع وبداية القصة. إيه أنسب سؤال يفرقلك الانفجار الحاد عن المغص العادي؟',
    station1Options: [
      {
        label: 'الوجع بدأ بالتدريج على مدار 3 أيام؟',
        patientReply: 'لا يا دكتور ده مسكني فجأة في ثانية واحدة وأنا قاعد، وبعدها بساعتين نزل يمين تحت!',
        isOptimal: false,
        feedback: 'ركز في إجابته: الانفجار بيبدأ فجأة (Sudden catastrophic onset) وبيتركز بعدها في الـ RIF.'
      },
      {
        label: 'بتاخد مسكنات NSAIDs؟ وهل الوجع بدأ فجأة في فم المعدة ونزل للجنب اليمين؟',
        patientReply: 'آه باخد مسكنات لركبي، والوجع ضرب في فم المعدة فجأة وبعد كام ساعة سمع في الـ Right iliac fossa!',
        isOptimal: true,
        feedback: 'برافو! تاريخ الـ NSAIDs مع ألم مفاجئ في الـ Epigastrium تحول للـ RIF بيوجهنا بقوة لـ Perforated ulcer.'
      },
      {
        label: 'هل الوجع بيروح لو أكلت بسكوتة؟',
        patientReply: 'بسكت إيه يا دكتور أنا مش قادر أتنفس من الوجع!',
        isOptimal: false,
        feedback: 'المريض في حالة Peritonitis حادة ومينفعش نسأله أسئلة قرحة مزمنة مستقرة.'
      }
    ],
    station2Alert: 'النائب الصغير فحصه وقال: "البطن Board-like rigid والألم متركز في الـ Right Iliac Fossa.. دي Acute Appendicitis يا دكتور!"',
    station2Findings: [
      'Board-like abdominal rigidity',
      'ألم شديد في الـ Epigastrium ثم تمركز في الـ Right Iliac Fossa',
      'غياب أصوات الأمعاء (Absent bowel sounds) و Tachycardia'
    ],
    station2Question: 'إيه الممر التشريحي اللي نزل فيه السائل الحمضي وعمل خدعة الزايدة دي؟',
    station2Options: [
      'Left paracolic gutter through the phrenocolic ligament',
      'Right paracolic gutter from the supracolic to the infracolic compartment',
      'Foramen of Winslow into the lesser sac',
      'Retroperitoneal space along the psoas muscle'
    ],
    station2Answer: 1,
    station2Exp: 'السائل بيتجمع في الـ Supracolic compartment ثم ينزل عبر الـ Right paracolic gutter (لأن الشمال مقفول بالـ Phrenocolic ligament) إلى الـ RIF.',
    station3Budget: 400,
    station3Prompt: 'عملت Erect Chest X-ray وطلعت سلبية (مفيش Air under diaphragm ظاهر) وأنت لسه شاكك في Perforated ulcer. اختار الفحص الآمن والدقيق من الميزانية:',
    station3Labs: [
      {
        id: 'lab-2a',
        name: 'Barium meal with double contrast',
        cost: 200,
        isOptimal: false,
        isContraindicated: true,
        resultText: 'تحذير قاتل! تسرب الباريوم للبريتون يسبب التهاب بريتوني كيميائي قاتل!',
        feedback: 'ممنوع منعاً باتاً إعطاء Barium عند الاشتباه في Perforation!'
      },
      {
        id: 'lab-2b',
        name: 'Water-soluble contrast meal (Gastrografin)',
        cost: 250,
        isOptimal: true,
        resultText: 'ظهر تسريب واضح للصبغة خارج جدار الاثني عشر (Diagnostic of perforation) بأمان تام.',
        feedback: 'أحسنت! الـ Gastrografin صبغة مائية آمنة تماماً في حالات الـ Perforation.'
      },
      {
        id: 'lab-2c',
        name: 'Upper GI endoscopy with high air insufflation',
        cost: 350,
        isOptimal: false,
        isContraindicated: true,
        resultText: 'خطر جسيم! نفخ الهواء يزيد التلوث البريتوني ويفاقم الـ Pneumoperitoneum!',
        feedback: 'المنظار بنفخ الهواء مضاد استطباب في البطن المثقوبة.'
      },
      {
        id: 'lab-2d',
        name: 'Technetium-99m scan',
        cost: 450,
        isOptimal: false,
        resultText: 'غير مناسب ولا يظهر تسريب الثقب الحاد.',
        feedback: 'بيستخدم لـ Meckel’s diverticulum مش للثقب الحاد.'
      }
    ],
    station4Prompt: 'دخلت العمليات وعملت Omental patch لقرحة الاثني عشر. لكن سؤال الاستشاري: لو كانت القرحة المخرومة دي في الـ Stomach (Perforated Gastric Ulcer)، إيه الخطوة الإجبارية الزيادة قبل القفل؟ وهل فيه سيناريو يتعالج تحفظياً؟',
    station4Options: [
      'Total gastrectomy فوراً حتى لو القرحة صغيرة',
      'أخذ Biopsy من حافة قرحة المعدة قبل الـ Omental patch (ولو كانت Sealed subacute perforation صغيرة واتقفلت تتعالج تحفظياً بـ NG suction و IV fluids/antibiotics/PPIs)',
      'ربط الـ Splenic artery ثم القفل',
      'عمل Roux-en-Y bypass لكل قرح المعدة المخرومة'
    ],
    station4Answer: 1,
    station4Exp: 'قرح المعدة المخرومة لازم ناخد منها Biopsy لاستبعاد السرطان قبل الـ Omental patch؛ ولو الخرم صغير واتقفل لوحده (Sealed subacute perforation) بيتعالج تحفظياً.'
  },
  {
    id: 'case-3',
    title: 'الحالة الثالثة: الترجيع الليلي وصوت الرجة',
    subtitle: 'Cicatricial Pyloric Stenosis (GOO)',
    patientName: 'الحاج سعيد',
    age: 52,
    appearance: 'نحيف، جاف، ومجهد جداً',
    chiefComplaint: 'وجع القرحة القديم اختفى، لكن بيرجع كميات ضخمة بالليل فيها أكل إمبارح.',
    vitals: { bp: '95/60', hr: 106, temp: '36.7°C', spo2: '98%', statusLabel: 'جفاف واضطراب أملاح' },
    linkedQuestionIds: [42, 43, 44, 45],
    station1Prompt: 'بتاخد التاريخ المرضي من الحاج سعيد. أنهي وصف للترجيع والأكل هيأكدلك الـ Gastric Outlet Obstruction؟',
    station1Options: [
      {
        label: 'هل الترجيع فيه صفراء (مرارة) وبيحصل الصبح بدري قبل الفطار؟',
        patientReply: 'لا خالص، الترجيع مفيهوش مرارة، وأنا بفطر الصبح عادي بس بالليل برجع أكل إمبارح!',
        isOptimal: false,
        feedback: 'لاحظ إجابته: المريض بيفطر عادي بس بالليل المعدة بتتملي ويرجع Non-bilious foul dark fluid.'
      },
      {
        label: 'هل بتعرف تاكل الفطار وتضيق بالليل وترجع أكل بايت مفيهوش مرارة؟',
        patientReply: 'أيوة يا دكتور! بفطر كويس وبعدها بالليل برجع أكل إمبارح المندوف من غير مرارة.',
        isOptimal: true,
        feedback: 'دقيق جداً! Non-bilious projectile vomiting لأكل غير مهضوم من اليوم السابق في المساء = Pyloric stenosis.'
      }
    ],
    station2Alert: 'أثناء الفحص لقيت حركة دودية مرئية في البطن من الشمال لليمين (Visible peristalsis) وسمعت صوت رجة (Succussion splash)، وعنده تقلصات في إيده (Tetany)!',
    station2Findings: [
      'Visible peristalsis from left to right',
      'Positive succussion splash',
      'Carpal spasm / Tetany'
    ],
    station2Question: 'إيه اضطراب الأملاح والدم اللي وصل الحاج سعيد لمرحلة الـ Tetany؟',
    station2Options: [
      'Hypernatremic, hyperkalemic metabolic acidosis',
      'Hyponatremic, hypokalemic, hypochloremic metabolic alkalosis with hypocalcemia',
      'Normokalemic respiratory acidosis',
      'Hypercalcemic metabolic alkalosis'
    ],
    station2Answer: 1,
    station2Exp: 'الترجيع المتكرر بيفقد المريض H+, Cl-, Na+, K+ فيدخل في Hyponatremic, hypokalemic, hypochloremic metabolic alkalosis، والـ Alkalosis يقلل الكالسيوم المتأين فيعمل Tetany.',
    station3Budget: 600,
    station3Prompt: 'عملت Barium meal طلعت المعدة متمددة ونازلة للحوض (Soup-dish appearance). ليه برضه لازم تدخل المنظار (Endoscopy) من الميزانية قبل الجراحة؟',
    station3Labs: [
      {
        id: 'lab-3a',
        name: 'Upper GI Endoscopy + Biopsy',
        cost: 350,
        isOptimal: true,
        resultText: 'البواب متليف وضيق لا يسمح بمرور المنظار، وتم أخذ عينات لاستبعاد ورم خبيث في البواب.',
        feedback: 'ممتاز! أشعة الباريوم ممكن تفوت Small pyloric carcinoma، فالمنظار والعينة إجباري.'
      },
      {
        id: 'lab-3b',
        name: 'الاعتماد على Barium meal فقط بدون منظار',
        cost: 100,
        isOptimal: false,
        resultText: 'خطأ! نسبة خطورة تفويت سرطان صغير عند البواب عالية.',
        feedback: 'كتاب القسم بيحذر: Barium meal often misses a small pyloric carcinoma!'
      }
    ],
    station4Prompt: 'النائب بيستعجل يدخله العمليات الليلة كحالة طوارئ! إيه ردك عليه وإيه العملية القياسية بعد التحضير؟',
    station4Options: [
      'ندخله طوارئ فوراً بـ Total gastrectomy',
      'مش طوارئ! نجهزه الأول بغسيل معدة بـ Ryle وتصليح الأملاح والأنيميا وعلاج طبيعي للصدر، ثم نعمل Truncal vagotomy + Gastrojejunostomy',
      'نديله كورتيزون ونروحه البيت',
      'نعمل Highly selective vagotomy لوحدها'
    ],
    station4Answer: 1,
    station4Exp: 'Pyloric stenosis requires surgery but is NOT an emergency! وبعد التحضير الكامل العملية القياسية هي Truncal vagotomy & gastrojejunostomy.'
  },
  {
    id: 'case-4',
    title: 'الحالة الرابعة: الورم الخفي والمعدة الجلد',
    subtitle: 'Gastric Carcinoma & Linitis Plastica',
    patientName: 'الأستاذ عبد الرحمن',
    age: 60,
    appearance: 'فقدان وزن ملحوظ وشحوب (Cachectic)',
    chiefComplaint: 'فقدان شهية وعسر هضم مستمر وشبع سريع من أكل كمية صغيرة.',
    vitals: { bp: '115/75', hr: 88, temp: '37.0°C', spo2: '98%', statusLabel: 'تقييم أورام عاجل' },
    linkedQuestionIds: [46, 47, 48, 49],
    station1Prompt: 'بتسأل الأستاذ عبد الرحمن عشان تفرق بين عسر هضم بسيط وورم المعدة. إيه أكتر عرض يقلقك في السن ده؟',
    station1Options: [
      {
        label: 'هل الوجع بيروح لما تشرب لبن ساقع؟',
        patientReply: 'لا يا دكتور مفيش وجع قرحة، أنا بس شهيتي مقفولة وخسيت 12 كيلو في شهرين!',
        isOptimal: false,
        feedback: 'فقدان الوزن السريع وفقدان الشهية في سن 60 سنة من علامات الإنذار الحمراء.'
      },
      {
        label: 'هل لاحظت فقدان وزن سريع وفقدان شهية وتعب عام أو صعوبة بلع؟',
        patientReply: 'أيوة خسيت 12 كيلو بسرعة وعندي غممان نفس وتعب من أقل مجهود.',
        isOptimal: true,
        feedback: 'سؤال دقيق يكشف الـ Red flags لسرطان المعدة المتقدم.'
      }
    ],
    station2Alert: 'في الفحص لقيت كلكوعة صلبة فوق الترقوة الشمال (Virchow’s node / Troisier’s sign) وبالـ PR حسيت رف صلب في الحوض!',
    station2Findings: [
      "Enlarged left supraclavicular LN (Virchow's node)",
      'Hard pelvic shelf on PR exam',
      '10% من المرضى بيجوا بعلامات انتشار مبكرة'
    ],
    station2Question: 'الرف الصلب اللي في الحوض اسمه إيه؟ ولو كانت المريضة شابة وانتشر الورم للمبايض يتسمى إيه؟',
    station2Options: [
      'Sister Mary Joseph nodule & Meigs tumor',
      "Blumer's shelf (in Douglas pouch) & Krukenberg's tumors (in ovaries)",
      "Calot's node & Teratoma",
      'Grey-Turner sign & Brenner tumor'
    ],
    station2Answer: 1,
    station2Exp: "انتشار Trans-coelomic للـ Douglas pouch يعمل Blumer's shelf، وللمبايض النشطة في السيدات الصغيرات يعمل Krukenberg's tumors.",
    station3Budget: 700,
    station3Prompt: 'المنظار العادي لقى المعدة ضيقة ومبتتفردش بالهواء بس الـ Biopsy السطحية طلعت سلبية، والـ CT أظهر Diffuse mural thickening والـ Mucosa سليمة (Linitis plastica). هتطلب إيه؟',
    station3Labs: [
      {
        id: 'lab-4a',
        name: 'Endoscopic Ultrasound (EUS) with guided deep biopsy',
        cost: 450,
        isOptimal: true,
        resultText: 'أظهر تسلل ورمي في الـ Submucosa والعضلات (T3N1) وأكد التشخيص بالـ Deep biopsy.',
        feedback: 'رائع! الـ Linitis plastica بيمشي تحت الـ Mucosa السليمة، والـ EUS هو المفتاح لتحديد العمق وأخذ عينة عميقة.'
      },
      {
        id: 'lab-4b',
        name: 'Serum CEA level فقط للتشخيص',
        cost: 150,
        isOptimal: false,
        resultText: 'CEA لا يصلح للتشخيص المبكر!',
        feedback: 'الـ CEA قيمته للـ Prognosis والمتابعة مش للتشخيص.'
      },
      {
        id: 'lab-4c',
        name: 'Repeat superficial gastroscopy',
        cost: 250,
        isOptimal: false,
        resultText: 'العينة السطحية طلعت سلبية تاني لأن الـ Mucosa سليمة!',
        feedback: 'هتكرر نفس الخطأ لأن الورم تحت المخاطية (Submucosal).'
      }
    ],
    station4Prompt: 'في حالات الورم القابل للاستئصال بعد الـ Neoadjuvant chemotherapy، إيه مواصفات عملية الـ Radical D2 Resection؟ (ولو الورم في الـ Cardia؟)',
    station4Options: [
      'استئصال بحافة 1 سم بدون لمس الغدد',
      'حافة أمان (5–6 سم فوق و3–4 سم من الاثني عشر) + Greater & Lesser omenta + 1st & 2nd tier LNs + Roux-en-Y (ولو في الـ Cardia: Oesophago-gastrectomy + آخر 10 سم من المريء بفتح Left thoraco-abdominal)',
      'استئصال الطحال والقولون في كل الحالات بفتحة صغيرة',
      'توصيلة Loop بسيطة بدون استئصال الغدد'
    ],
    station4Answer: 1,
    station4Exp: 'الـ D2 resection القياسية: 5–6 سم فوق، 3–4 سم duodenal cuff، المنديلين، 1st & 2nd tier LNs، و Roux-en-Y. وأورام الـ Cardia تحتاج Oesophago-gastrectomy بفتح Left thoraco-abdominal.'
  },
  {
    id: 'case-5',
    title: 'الحالة الخامسة: قرحة المعدة اللي مش راضية تخف (+ GIST)',
    subtitle: 'Chronic Gastric Ulcer Follow-up & GIST Protocol',
    patientName: 'الأستاذة هدى',
    age: 48,
    appearance: 'خست شوية بسبب خوفها من الأكل بعد الوجبة',
    chiefComplaint: 'وجع بعد الأكل مباشرة بيخليها تخاف تاكل وتنزل وزن.',
    vitals: { bp: '125/80', hr: 80, temp: '36.8°C', spo2: '99%', statusLabel: 'متابعة دقيقة' },
    linkedQuestionIds: [50, 51, 52, 53],
    station1Prompt: 'الأستاذة هدى أخدت 6 عينات من قرحة معدة وطلعت حميدة، ومشيت على علاج دوائي 6 أسابيع والوجع اختفى تماماً! بتقولك: "أوقف الدوا ومش هعمل منظار تاني بقى؟"',
    station1Options: [
      {
        label: 'طبعاً وقفي العلاج طالما الوجع اختفى!',
        patientReply: 'أستاذ الجراحة زعلان منك! ده ممكن يكون سرطان وأعراضه هديت مؤقتاً بالأدوية!',
        isOptimal: false,
        feedback: 'خطر جداً! سرطان المعدة ممكن أعراضه تتحسن مؤقتاً على الـ PPIs.'
      },
      {
        label: 'لازم نعيد المنظار بعد 6 أسابيع بغض النظر عن تحسن الأعراض للتأكد من التئام القرحة',
        patientReply: 'فهمت يا دكتور، هلتزم بإعادة المنظار بعد 6 أسابيع عشان نطمن.',
        isOptimal: true,
        feedback: 'قرار سليم 100%! إعادة المنظار بعد 6 أسابيع إجبارية في كل قرحة معدة.'
      }
    ],
    station2Alert: 'عدى 6 أسابيع والقرحة مابدأتش تلتئم (أو فضلت مش مقفولة لحد 6 شهور).. وفي مريض تاني في نفس العيادة طلع عنده ورم GIST تحت المخاطية حجمه 3.5 سم ونشاطه 7%!',
    station2Findings: [
      'عدم التئام قرحة المعدة عند 6 أسابيع أو عدم اكتمالها عند 6 شهور',
      'ورم GIST بحجم 3.5 سم و Proliferative activity 7%'
    ],
    station2Question: 'إيه قاعدة التدخل الجراحي لقرحة المعدة اللي مبتخفش وإيه العملية القياسية ليها؟',
    station2Options: [
      'نستنى سنتين وبعدين نعمل Truncal vagotomy',
      'لو مابدأتش تلتئم عند 6 أسابيع أو ماقفلتش تماماً بعد 6 شهور نعمل Partial gastrectomy + Billroth I',
      'ندخل عمليات من أول يوم لأي قرحة معدة',
      'نكوي القرحة بالليزر فقط'
    ],
    station2Answer: 1,
    station2Exp: 'قاعدة الستات: 6 أسابيع لبداية الالتئام و6 شهور بحد أقصى للالتئام الكامل؛ وإلا فالعملية القياسية هي Partial gastrectomy + Billroth I.',
    station3Budget: 500,
    station3Prompt: 'بالنسبة لمريض الـ GIST (حجم 3.5 سم ونشاط 7% ومفيش انتشار)، إيه الفحص التأكيدي والخطة الأنسب؟',
    station3Labs: [
      {
        id: 'lab-5a',
        name: 'CT Abdomen + Immunophenotyping (CD117)',
        cost: 300,
        isOptimal: true,
        resultText: 'CT أظهر Submucosal filling defect مع مخاطية سليمة، و CD117 إيجابي (GIST متوسط الخطورة).',
        feedback: 'دقيق! الـ GIST بيتشخص بالـ CT والمنظار وصبغة CD117.'
      },
      {
        id: 'lab-5b',
        name: 'الانتظار والمتابعة فقط بدون جراحة',
        cost: 0,
        isOptimal: false,
        resultText: 'الانتظار يصلح فقط لو الورم < 2 سم ونشاطه < 5%!',
        feedback: 'الحجم هنا 3.5 سم ونشاطه 7% (متوسط الخطورة) ويستلزم استئصال موضعي.'
      }
    ],
    station4Prompt: 'اختار الجراحة الصح لمريض الـ GIST المتوسط (3.5 سم، 7%)، ولو كان نفس الورم حجمه 8 سم ونشاطه 15% هتبدأ بإيه قبل الجراحة؟',
    station4Options: [
      'للمتوسط: Local/Wedge resection بحافة أمان بدون تشريح الغدد الليمفاوية؛ وللكبير (>5 سم أو >10%): نبدأ بـ Tyrosine Kinase Inhibitors (Imatinib / Sunitinib) للتصغير',
      'Radical D2 total gastrectomy + Splenectomy في الحالتين',
      'علاج إشعاعي ذري فقط بدون جراحة',
      'استئصال الغدد الليمفاوية فقط'
    ],
    station4Answer: 0,
    station4Exp: 'الـ GIST نادراً ما ينتشر للـ LNs، فالمتوسط (2–5 سم و5–10%) يكفيه Wedge resection بحافة أمان، والكبير/عالي النشاط ياخد Imatinib/Sunitinib للـ Downgrading قبل الجراحة.'
  },
  {
    id: 'case-6',
    title: 'الحالة السادسة: نزيف القرحة المفاجئ (تغطية كتاب القسم)',
    subtitle: 'Acute Upper GI Bleeding Management',
    patientName: 'العم مصطفى',
    age: 64,
    appearance: 'شاحب جداً، أطرافه باردة وعرقان',
    chiefComplaint: 'قيء دموي غزير (Hematemesis) وإغماء مع براز أسود زفتي (Melena).',
    vitals: { bp: '85/55', hr: 126, temp: '36.4°C', spo2: '95%', statusLabel: 'صدمة نزفية' },
    linkedQuestionIds: [57, 68, 80, 106],
    station1Prompt: 'العم مصطفى في أوضة الإنعاش بعد قيء دموي. إيه المعلومة الحاسمة اللي هتفرق معاك في تقييم خطورة الحالة؟',
    station1Options: [
      {
        label: 'هل هو فوق 45 سنة وعنده تصلب شرايين وتاريخ قرحة طويل أو كان بياخد علاج قرحة؟',
        patientReply: 'عنده 64 سنة، وتصلب شرايين، وكان ماشي على PPIs منتظم وبرضه نزف 2200 مل دم!',
        isOptimal: true,
        feedback: 'سؤال قاتل في ذكائه! السن الكبير وتصلب الشرايين والنزيف تحت العلاج الدوائي الكافي وكمية > 2000 مل كلها مؤشرات جراحة عاجلة.'
      },
      {
        label: 'هل عنده وجع في ضهره من سنة؟',
        patientReply: 'أولوياتنا دلوقتي وقف الصدمة النزفية يا دكتور!',
        isOptimal: false,
        feedback: 'في النزيف الحاد بنركز على كمية الدم وعمر المريض وتصلب الشرايين وفشل العلاج الدوائي.'
      }
    ],
    station2Alert: 'بعد أول 10 دقايق من النزيف سحبت عينة CBC، النائب بيقولك: "الهيموجلوبين طالع 12.5 يا دكتور يعني مانزفش كتير!"',
    station2Findings: [
      'BP 85/55, HR 126 (Hypovolemic shock)',
      'عينة CBC مسحوبة في أول 10 دقائق من النزيف الحاد',
      'نقل 1500 مل دم مستمر'
    ],
    station2Question: 'إيه ردك العلمي على النائب بخصوص الهيموجلوبين والـ Haematocrit في أول النزيف؟',
    station2Options: [
      'صح كلامك، النزيف بسيط ونروحه البيت',
      'غلط! الهيموجلوبين والـ Haematocrit لا يعبران بصدق عن النزيف الحاد إلا بعد ساعات قليلة عند حدوث Haemodilution',
      'الهيموجلوبين بيوصل صفر في أول دقيقة',
      'الـ CBC ملوش علاقة بالنزيف خالص'
    ],
    station2Answer: 1,
    station2Exp: 'في بداية النزيف الحاد بيفقد المريض دم كامل (بلازما وخلايا معاً) فيبان التركيز طبيعي، ولا ينخفض إلا بعد ساعات لما الجسم يسحب سوائل ويعمل Haemodilution.',
    station3Budget: 500,
    station3Prompt: 'بعد استقرار الضغط بالمحاليل ونقل الدم والـ IV PPIs، إيه الإجراء التشخيصي والعلاجي الأول؟',
    station3Labs: [
      {
        id: 'lab-6a',
        name: 'Urgent Upper GI Endoscopy + Haemostasis (Adrenaline/Diathermy/Clips)',
        cost: 350,
        isOptimal: true,
        resultText: 'أظهر Spurting artery في قرحة الاثني عشر الخلفية وتم الحقن والكي، لكن النزيف عاود الظهور بعد ساعات.',
        feedback: 'ممتاز! المنظار العاجل بعد الإنعاش هو الأساس لتشخيص ومحاولة وقف النزيف بالحقن أو الكي أو الكلبسات أو الليزر.'
      },
      {
        id: 'lab-6b',
        name: 'Barium meal عاجل في الطوارئ',
        cost: 200,
        isOptimal: false,
        resultText: 'لا يوقف النزيف ويعوق المنظار لاحقاً!',
        feedback: 'في النزيف الحاد المنظار هو الملك مش الباريوم.'
      }
    ],
    station4Prompt: 'النزيف ارتجع بعد المنظار وكمية النزيف فوق 2000 مل (Absolute indication). متى تتخذ قرار الجراحة؟ وما العملية لقرحة الاثني عشر النازفة مقابل قرحة المعدة النازفة؟',
    station4Options: [
      'القرار خلال 48–72 ساعة؛ لـ DU: فتح البواب طولياً + Under-running sutures + Pyloroplasty + Truncal vagotomy؛ ولـ GU: Gastrectomy',
      'ننتظر 14 يوم على المحاليل قبل التفكير في الجراحة',
      'نكتفي بـ Omental patch في الحالتين',
      'نعمل Sleeve gastrectomy'
    ],
    station4Answer: 0,
    station4Exp: 'قرار الجراحة في النزيف لازم خلال 48–72 ساعة؛ لـ DU النزفية Under-running sutures + Pyloroplasty + Truncal vagotomy، ولـ GU النزفية Gastrectomy.'
  },
  {
    id: 'case-7',
    title: 'الحالة السابعة: عيادة السمنة وما بعد الاستئصال (تغطية كتاب القسم)',
    subtitle: 'Bariatric Selection & Post-Gastrectomy Sequelae',
    patientName: 'الأستاذ طارق',
    age: 38,
    appearance: 'BMI = 33 kg/m² مع سكر من النوع الثاني وارتفاع ضغط ودهون (Metabolic Syndrome)',
    chiefComplaint: 'فشل في الدايت والرياضة، وبيسأل هل ينفعله جراحة سمنة ولا لأ، وإيه الفحوصات المطلوبة.',
    vitals: { bp: '145/92', hr: 84, temp: '36.9°C', spo2: '97%', statusLabel: 'عيادة السمنة' },
    linkedQuestionIds: [58, 59, 78, 79],
    station1Prompt: 'الأستاذ طارق الـ BMI بتاعه 33 وعنده Metabolic syndrome (Syndrome X) وفشل في الدايت والرياضة. هل تنطبق عليه شروط جراحة السمنة؟',
    station1Options: [
      {
        label: 'لأ، لازم الـ BMI يعدي 40 في كل الأحوال',
        patientReply: 'بس كتاب القسم كاتب استثناء صريح لـ Metabolic syndrome!',
        isOptimal: false,
        feedback: 'ركز في أرقام كتاب القسم التلاتة: ≥ 40، أو ≥ 35 مع Comorbidity، أو ≥ 30 مع Metabolic syndrome.'
      },
      {
        label: 'نعم! لأن BMI ≥ 30 مع Metabolic syndrome (Syndrome X) من شروط جراحة السمنة بعد فشل الدايت والتقييم النفسي',
        patientReply: 'أيوة يا دكتور أنا جربت أنظمة كتير ومستعد نفسياً ومتعاون.',
        isOptimal: true,
        feedback: 'إجابة دقيقة جداً طبقاً لصفحة 725 في كتاب القسم!'
      }
    ],
    station2Alert: 'جهزنا الأستاذ طارق للعملية، بس طلع عنده كمان Severe GERD. والممرضة بتسأل عن تحاليل الغدد اللازمة قبل العملية.',
    station2Findings: [
      'BMI = 33 + Metabolic Syndrome',
      'Severe GERD (ارتجاع مريئي شديد)',
      'حاجة لاستبعاد أسباب السمنة الهرمونية'
    ],
    station2Question: 'إيه التحاليل الهرمونية الأساسية قبل العملية، وليه نتجنب الـ LSG (التكميم) لو عنده Severe GERD أو BMI > 50؟',
    station2Options: [
      'Serum gastrin & secretin؛ والتكميم بيزود السكر',
      'TSH, T4, and plasma cortisol؛ والتكميم بيزود الـ GERD وأقل كفاءة لو BMI > 50 وغير قابل للعكس',
      'Calcitonin & PTH؛ والتكميم قابل للعكس',
      'Aldosterone & renin فقط'
    ],
    station2Answer: 1,
    station2Exp: 'التحاليل قبل جراحات السمنة: TSH, T4 (للدرقية) و Plasma cortisol (للكوشينج) + تقييم نفسي. والـ LSG بتزود الـ GERD وأقل كفاءة في BMI > 50.',
    station3Budget: 500,
    station3Prompt: 'اختار التقييم الكامل المطلوب قبل عملية تحويل المسار:',
    station3Labs: [
      {
        id: 'lab-7a',
        name: 'CBC + Blood sugar + LFT/KFT + TSH, T4, Plasma Cortisol + Psych Assessment',
        cost: 400,
        isOptimal: true,
        resultText: 'الوظائف سليمة، والغدة الدرقية والكورتيزول طبيعيين، وملائم نفسياً للجراحة.',
        feedback: 'تقييم متكامل ومطابق لبروتوكول كتاب القسم.'
      },
      {
        id: 'lab-7b',
        name: 'تحليل صورة دم فقط بدون هرمونات أو تقييم نفسي',
        cost: 100,
        isOptimal: false,
        resultText: 'ناقص! قد تكون السمنة بسبب Cushing أو Hypothyroidism.',
        feedback: 'لا بد من استبعاد الأسباب الهرمونية والنفسية.'
      }
    ],
    station4Prompt: 'قررت تعمل تحويل مسار كلاسيكي (LRYGB) بدل المصغر (OAGB). فكرنا بالأرقام الدقيقة للـ LRYGB مقارنة بالـ OAGB:',
    station4Options: [
      'في LRYGB: جيب 30 مل، نقسم الـ Jejunum على بعد 50 سم من الـ DJJ وتوصيلة تانية على 80 سم؛ وفي OAGB: Loop على بعد 200 سم من الـ DJJ (وقابلة للعكس)',
      'في LRYGB على بعد 200 سم وفي OAGB على بعد 50 سم',
      'في الاتنين بنوصل بالـ Ileum على بعد 10 سم',
      'الـ LRYGB بتشيل 80% من المعدة وترميها بره الجسم'
    ],
    station4Answer: 0,
    station4Exp: 'LRYGB: 30 mL pouch + 50 cm below DJJ + 80 cm distal limb (60–80% EWL). OAGB: long narrow pouch + 200 cm loop from DJJ (reversible).'
  }
];

export const DU_VS_GU_TABLE = [
  { feature: 'Peak Age Incidence', du: '20 – 40 years (Young active)', gu: '40 – 60 years' },
  { feature: 'Male : Female Ratio (Table 30.1)', du: '5 : 1', gu: '2 : 1' },
  { feature: 'Pain Timing', du: '2–3 hours after meals (Hunger & Night pain)', gu: 'Shortly after meals' },
  { feature: 'Pain Relief', du: 'Relieved by food (carries biscuits) & antacids', gu: 'Relieved by antacids & vomiting; NOT nocturnal' },
  { feature: 'Nausea & Vomiting', du: 'May occur (not prominent)', gu: 'Present (vomiting brings relief)' },
  { feature: 'Periodicity', du: 'Marked', gu: 'Less marked (loss suggests malignancy)' },
  { feature: 'Appetite & Weight', du: 'Good appetite · May be overweight', gu: 'Afraid to eat · Weight loss' },
  { feature: 'Malignant Transformation', du: 'Rare', gu: 'Risk exists (5%–10%; away from lesser curve = suspicious)' },
];

export const EQUATION_PUZZLES: EquationPuzzle[] = [
  {
    id: 81,
    clues: [
      'Sudden painless massive hematemesis',
      'Ruptured submucosal angiomatous malformation in the stomach',
      'Normal surrounding mucosa',
    ],
    options: [
      "Dieulafoy's Lesion",
      'Mallory-Weiss Syndrome',
      'Zollinger-Ellison Syndrome',
      'Gastric Adenocarcinoma',
    ],
    answer: 0,
    exp: "الـ Dieulafoy's lesion هو تشوه وعائي شرياني تحت المخاطية بينفجر ويعمل نزيف علوي عنيف والمخاطية حواليه سليمة، وهو رقم 2 في DD نزيف القرحة.",
  },
  {
    id: 82,
    clues: [
      'Chronic atrophic gastritis with achlorhydria',
      'Bacterial conversion of dietary nitrates into N-nitrosamines',
      'Deficiency of Intrinsic Factor',
    ],
    options: [
      'Gastric MALToma',
      'Pernicious Anaemia predisposing to Intestinal-type Gastric Adenocarcinoma',
      "Curling's Ulcer",
      'Hyperplastic Polyp',
    ],
    answer: 1,
    exp: 'غياب الحمض (Achlorhydria) بيسمح للبكتيريا بتكوين N-nitrosamines المسرطنة، ومع نقص الـ Intrinsic factor تحصل Pernicious Anaemia المؤهلة لسرطان المعدة (Intestinal type).',
  },
  {
    id: 83,
    clues: [
      'Third part of the duodenum',
      'Compression anteriorly by an acutely angled Superior Mesenteric Artery',
      'Mechanical bilious vomiting & gastric outlet obstruction',
    ],
    options: [
      "Superior Mesenteric Artery (SMA) Syndrome / Wilkie's Syndrome",
      'Duodenal Blow-out',
      'Afferent Loop Syndrome',
      'Linitis Plastica',
    ],
    answer: 0,
    exp: "الجزء التالت من الاثني عشر بيعدي قدامه الـ SMA، ولو ضغطت عليه بتعمل SMA / Wilkie's syndrome وانسداد ميكانيكي لمخرج المعدة والاثني عشر.",
  },
];

export const MATCH_PAIRS: MatchPair[] = [
  {
    id: 'm1',
    cause: "Meckel's Diverticulum Ulcer",
    mechanismAndTest: 'بسبب وجود Ectopic acid-secreting gastric mucosa جنب الـ Ileum في الـ Diverticulum',
  },
  {
    id: 'm2',
    cause: 'Zollinger-Ellison Syndrome',
    mechanismAndTest: 'ورم في البنكرياس يفرز Gastrin أو G-cell hyperplasia، وأدق اختبار ليه هو Secretin stimulation test',
  },
  {
    id: 'm3',
    cause: 'Hyperparathyroidism Ulcer',
    mechanismAndTest: 'ارتفاع الكالسيوم في الدم يحفز إفراز الـ Gastrin والحمض',
  },
  {
    id: 'm4',
    cause: 'Gastric Stump Carcinoma (10–20 yrs)',
    mechanismAndTest: 'ارتجاع العصارة الصفراوية المزمن يرفع خطر السرطان 4 أضعاف بعد الاستئصال',
  },
];

export const RADIOLOGY_HOTSPOTS: RadiologyHotspot[] = [
  {
    id: 'rad-1',
    svgType: 'trifoliate',
    title: 'Barium Meal · Duodenal Cap (Q85)',
    figRef: 'Fig. 30.12 c',
    question: 'قدامك صورة Barium Meal لـ Duodenal Cap مرسومة على شكل ورقة البرسيم الثلاثية (Trifoliate / Clover-leaf deformity). اضغط على التفسير الباثولوجي الصحيح:',
    options: [
      'Normal anatomical triangular duodenal bulb',
      'Fixed deformity of the duodenal bulb indicating chronic fibrosis and scarring of a duodenal ulcer',
      'Acute gastric volvulus obstructing the fundus',
      'Linitis plastica infiltrating the submucosa',
    ],
    answer: 1,
    exp: 'الـ Duodenal cap الطبيعي بيبان كمثلث أملس، ولما يحصل فيه تليف مزمن بيتشد ويعمل شكل الـ Trifoliate / Clover-leaf deformity.',
  },
  {
    id: 'rad-2',
    svgType: 'soupdish',
    title: 'Barium Meal · Huge Dilated Stomach',
    figRef: 'Fig. 30.28',
    question: 'المعدة متمددة جداً وواصلة لحد الحوض ومليانة بقايا أكل (Soup-dish appearance). ما التشخيص ولماذا نكمل بالمنظار؟',
    options: [
      'Pyloric stenosis (Gastric outlet obstruction) — والمنظار أساسي لاستبعاد Small pyloric carcinoma',
      'Subacute sealed perforation — والمنظار ممنوع',
      'Normal stomach after breakfast',
      'Congenital duodenal atresia in a newborn',
    ],
    answer: 0,
    exp: 'منظر الـ Soup-dish appearance بيميز الـ Pyloric stenosis المتأخر، ولازم نعمل Gastroscopy لأن الباريوم قد يفوت ورم صغير عند البواب.',
  },
  {
    id: 'rad-3',
    svgType: 'hourglass',
    title: 'Barium Meal · Constricted Mid-Stomach',
    figRef: 'Fig. 30.29',
    question: 'المعدة مقسومة لنصين بخصر ضيق في النص (Hourglass deformity). ما السبب المرضي الكلاسيكي وما العلاج الجراحي؟',
    options: [
      'تليف قرحة Saddle-shaped على الـ Lesser curvature — وعلاجها Partial gastrectomy لإزالة الـ Distal pouch',
      'تكميم معدة بالمنظار (LSG)',
      'ارتجاع صفراوي بعد Billroth II',
      'تشوه وعائي Dieulafoy lesion',
    ],
    answer: 0,
    exp: 'الـ Cicatrized saddle-shaped ulcer على الـ Lesser curvature بتقسم المعدة لـ Hourglass stomach وتُعالج بـ Partial gastrectomy.',
  },
  {
    id: 'rad-4',
    svgType: 'pneumoperitoneum',
    title: 'Erect Chest X-Ray · Crescent Under Diaphragm',
    figRef: 'Fig. 30.23',
    question: 'هلال هواء أسود تحت قبة الحجاب الحاجز في أشعة الصدر بالوضع القائم (Air under diaphragm). ما الخطوة التالية؟',
    options: [
      'Perforated peptic ulcer — إنعاش عاجل (NG tube, IV fluids, antibiotics, PPI) ثم عملية Omental patch (مع Biopsy لو كانت Gastric)',
      'إعطاء Barium meal فوراً لتصوير المعدة',
      'تأجيل الجراحة أسبوعين للعلاج الطبي',
      'تشخيص Pyloric stenosis وإعطاء كورتيزون',
    ],
    answer: 0,
    exp: 'وجود Air under cupula of diaphragm يؤكد Perforation، ونحضر المريض فوراً للعمليات بـ Omental patch (ولو القرحة في المعدة لازم Biopsy).',
  },
];

export const SPOT_LIE_ITEMS: SpotLieItem[] = [
  {
    id: 86,
    topic: 'Gastric MALToma (Non-Hodgkin’s B-cell lymphoma)',
    statements: [
      'بتمثل حوالي 2% من أورام المعدة الخبيثة',
      'الـ Prognosis بتاعها أحسن من الـ Adenocarcinoma',
      'هي أشيع ورم خبيث في المعدة بنسبة 95%',
      'بتطلع من النسيج الليمفاوي المرتبط بالغشاء المخاطي (MALT)',
    ],
    lieIndex: 2,
    exp: 'الكدبة هي (C) لأن الـ Adenocarcinoma هو اللي بيمثل 95%، بينما الـ MALToma بتمثل 2% فقط والـ GIST 1%.',
  },
  {
    id: 87,
    topic: 'الخصائص اللي تخلي مريض قرحة نازفة يستجيب كويس للعلاج التحفظي',
    statements: [
      'سن المريض صغير تحت 45 سنة',
      'نزيف بسيط وتاريخ مرضي قصير مع عسر الهضم',
      'المريض مسن وعنده تصلب شرايين شديد (Atherosclerosis) وتاريخ طويل مع القرحة',
      'النزيف حصل بعد أخذ مسكنات مؤخراً وتم إيقافها',
    ],
    lieIndex: 2,
    exp: 'الكدبة هي (C) لأن المريض المسن بتصلب الشرايين شرايينه ناشفة مابتعرفش تنقبض توقف النزيف ومابيتحملش الـ Shock، فده محتاج تدخل جراحي مبكر.',
  },
  {
    id: 88,
    topic: 'فشل تفريغ المعدة بعد العمليات (Postoperative Stomal Obstruction)',
    statements: [
      'أغلب الحالات سببها ورم مائي (Oedema) في مكان التوصيلة وبتخف بالـ Ryle والمحاليل',
      'ممكن تحصل بسبب خطأ جراحي أو بروز غشاء الـ Antrum المتضخم',
      'ممكن تحصل بعد الـ Vagotomy رغم إن التوصيلة سالكة بسبب كسل المعدة (Atonic stomach)',
      'كل حالات الـ Stomal obstruction لازم تدخل عمليات تاني في نفس اليوم لفك التوصيلة',
    ],
    lieIndex: 3,
    exp: 'الكدبة هي (D) لأن أغلب الحالات سببها Oedema أو Atonic stomach وبتستجيب للعلاج التحفظي بشفط المعدة والمحاليل الوريدية بدون جراحة.',
  },
  {
    id: 89,
    topic: 'علاقة الفيروسات والبكتيريا بسرطان المعدة',
    statements: [
      'الإصابة بـ H. pylori بتزود خطر سرطان المعدة 3 أضعاف',
      'فيروس الـ Epstein-Barr (EBV) والـ Cytomegalovirus (CMV) مرتبطين بزيادة خطر سرطان المعدة',
      'قرحة الاثني عشر المزمنة بتتحول لسرطان بنفس نسبة قرحة المعدة تماماً',
      'التهاب المعدة الضموري المزمن بيسمح للبكتيريا بتكوين مادة N-nitrosamines المسرطنة',
    ],
    lieIndex: 2,
    exp: 'الكدبة هي (C)؛ تحول قرحة الاثني عشر لسرطان نادر جداً على عكس قرحة المعدة، وده سؤال نصاً في امتحانات السنين السابقة.',
  },
  {
    id: 90,
    topic: 'عملية حزام المعدة (Gastric Banding)',
    statements: [
      'استخدامها بيقل جداً خلال العقد الأخير',
      'كفاءتها أقل في التحكم في السمنة والأمراض المصاحبة',
      'مصحوبة بمضاعفات متعددة بسبب وجود جسم غريب',
      'هي العملية رقم 1 والأكثر إجراءً في العالم حالياً',
    ],
    lieIndex: 3,
    exp: 'الكدبة هي (D)؛ العملية الأكثر شيوعاً عالمياً هي التكميم (LSG)، بينما حزام المعدة في تراجع مستمر.',
  },
];

export const TRIAGE_SCENARIOS: TriageScenario[] = [
  {
    id: 91,
    title: 'نبطشية الطوارئ الساعة 2 بالليل — الترياج الثلاثي الحرج (Q91)',
    timeLabel: '02:00 AM · ER Trauma & Acute Abdomen',
    intro: 'دخل عليك 3 عيانين في نفس اللحظة بالطوارئ. رتب خطة التدخل الجراحي الطارئ لكل مريض: مين يدخل العمليات فوراً بعد الإنعاش السريع، ومين يُمنع من دخول العمليات الليلة ويتحجز في الرعاية الأول؟',
    patients: [
      {
        id: 'p1',
        label: 'المريض 1: شاب — Perforated DU',
        summary: 'قرحة اثني عشر مخرومة من 4 ساعات وبطنه Board-like rigid.',
        vitals: 'BP 90/60 · HR 122',
        labs: 'Air under diaphragm +',
        correctAction: 'immediate_or',
        rationale: 'الـ Perforated DU طوارئ جراحية حقيقية؛ يدخل العمليات فوراً بعد الإنعاش السريع (NG + IV fluids + antibiotics + PPI).'
      },
      {
        id: 'p2',
        label: 'المريض 2: راجل — Pyloric Stenosis',
        summary: 'بيرجع أكل بايت من شهر، وجاي بجفاف شديد و Alkalosis.',
        vitals: 'BP 100/65 · HR 104',
        labs: 'K+ = 2.4 mEq/L · HCO3- ↑',
        correctAction: 'icu_resuscitate_first',
        rationale: 'ممنوع يدخل العمليات الليلة! الـ Pyloric stenosis مش طوارئ؛ لو دخل وهو جاف والـ K+ واقع 2.4 هيموت على الترابيزة! يتحجز في الرعاية لتصليح الأملاح وغسيل المعدة الأول.'
      },
      {
        id: 'p3',
        label: 'المريض 3: سيدة — Bleeding Gastric Ulcer',
        summary: 'قرحة معدة نازفة فقدت 2200 مل دم وفشل المنظار في وقف النزيف.',
        vitals: 'BP 80/50 · HR 132',
        labs: 'Ongoing bleed despite transfusion',
        correctAction: 'immediate_or',
        rationale: 'النزيف المستمر العنيف (> 2000 مل) مع فشل المنظار طوارئ جراحية مطلقة؛ تدخل العمليات فوراً (Gastrectomy) مع نقل الدم.'
      }
    ],
    overallExp: 'القاعدة الذهبية في نبطشية الجراحة: المريض 3 والمريض 1 يدخلوا العمليات فوراً بعد الإنعاش السريع، بينما المريض 2 (Pyloric stenosis) يُمنع من دخول العمليات الليلة ويتحجز في الرعاية لتصليح الأملاح والـ K+ وغسيل المعدة الأول!'
  }
];

export const PIMP_QUESTIONS: PimpQuestion[] = [
  {
    id: 92,
    professorMood: 'أستاذ الجراحة واقف فوق راسك في الراوند وبيبصلك بتركيز...',
    question: 'يا ابني، ليه لما بنعمل Pyloroplasty بنفتح البواب بالطول (Longitudinally) ونقفله بالعرض (Transversely)؟ لو قفلناه بالطول زي ما فتحناه هيحصل إيه؟',
    options: [
      'لو قفلناه بالطول هيحصل ضيق (Stricture) مكان الغرز، إنما فتحه بالطول وقفله بالعرض بيكسر حلقة العضلة العاصرة ويوسع مخرج المعدة تماماً (Heineke-Mikulicz principle)',
      'عشان يسهل فك الغرز بعد أسبوعين',
      'عشان يقلل إفراز الجاسترين من الـ Fundus',
      'لو قفلناه بالعرض هيحصل Afferent loop syndrome',
    ],
    answer: 0,
    exp: 'مبدأ Heineke-Mikulicz: الفتح بالطول والقفل بالعرض بيكسر الـ Pyloric sphincter ويوسع الـ Lumen، أما القفل بالطول فيعمل Stricture.',
  },
  {
    id: 93,
    professorMood: 'الأستاذ ساب العيان والتفتلك فجأة بسؤال فسيولوجي عميق:',
    question: 'تقدر تقولي ليه المعدة الطبيعية مابتهضمش نفسها رغم إن الـ HCl بتاعها يقدر يدوب مسمار حديد، بينما الـ Antrum والـ Duodenum هم اللي بيتقرحوا؟',
    options: [
      'لأن الـ Proximal acid-secreting mucosa محمية بـ Mucosal barrier قوي (مخاط، بيكربونات، تجدد خلايا سريع، وتدفق دموي بـ Prostaglandins)، لكنها تهضم الأغشية المجاورة اللي مش مجهزة بنفس القوة (Alkaline antrum, Duodenum, Lower esophagus)',
      'لأن الـ HCl بيتفرز خامل في المعدة ومش بيتنشط غير في الاثني عشر',
      'لأن جدار المعدة العلوي متبطن بطبقة كولاجين سميكة فقط',
      'لأن الصفراء بتعادل الحمض في الـ Fundus باستمرار',
    ],
    answer: 0,
    exp: 'الحماية في الـ Proximal mucosa تعتمد على الـ Gastroduodenal mucosal barrier (مخاط + بيكربونات محبوسة + تجدد خلايا سريع + تدفق دموي + Prostaglandins).',
  },
  {
    id: 94,
    professorMood: 'دخلتم أوضة مريض عامل استئصال معدة جزئي، الأستاذ بيشاور على صينية الأكل:',
    question: 'عيان جالك بـ Early Dumping Syndrome بعد عملية معدة.. تقوله يشرب المية والعصير إمتى؟ وإيه شكل الأكل بتاعه؟',
    options: [
      'ياكل وجبات صغيرة متكررة، غنية بالبروتين والدهون وقليلة الكربوهيدرات، ويشرب السوائل بين الوجبات فقط (مش مع الأكل) عشان مايسرعش نزول محلول Hyperosmolar للأمعاء',
      'يشرب عصير مسكر مع الأكل عشان يبلع بسهولة',
      'ياكل وجبة واحدة كبيرة بالليل غنية بالكربوهيدرات',
      'يمتنع عن البروتين والدهون لمدة 6 شهور',
    ],
    answer: 0,
    exp: 'أهم نصيحة في الـ Early Dumping: سوائل بين الوجبات فقط + وجبات صغيرة متكررة + عالية البروتين والدهون + قليلة الكربوهيدرات.',
  },
  {
    id: 95,
    professorMood: 'آخر سؤال في الراوند عشان تمشي بدري النهاردة:',
    question: 'قولي إيه نوعين الأنابيب المشهورين اللي ليهم راس عاملة زي عيش الغراب (Mushroom head) وبنركبهم في عملية Stamm’s Gastrostomy؟',
    options: [
      'Malecot tube أو de Pezzar tube',
      'Ryle tube أو Foley catheter',
      'Sengstaken-Blakemore أو Nelaton tube',
      'Levin tube أو Chest tube',
    ],
    answer: 0,
    exp: "أنابيب عيش الغراب المشهورة في Stamm's gastrostomy هي Malecot tube و de Pezzar tube.",
  },
];
