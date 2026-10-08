import {
  BookCheck,
  Presentation,
  Lightbulb,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Brain,
  Layers,
  CheckSquare,
  Monitor,
  ShieldCheck,
  Percent,
  User,
  School,
  Eye,
  FileText,
  Mic,
  FlaskConical,
  Award,
  HeartHandshake,
  Laptop,
  BookOpen,
  Landmark,
  Search,
  Flag,
  ClipboardList,
  Compass,
  Users,
  Globe,
  Building,
  BookMarked,
  LaptopMinimal,
} from 'lucide-react'
import bedHeroImg from '../assets/academics/b.ed_hero.jpg'
import medHeroImg from '../assets/academics/m.ed_hero.jpg'
import bedProgramImg from '../assets/academics/b.ed_program.jpg'
import medProgramImg from '../assets/academics/m.ed_program.jpg'

import teacherIcon from '../assets/academics/icons/whychoose/Teacher.svg'
import teachingIcon from '../assets/academics/icons/whychoose/Teaching.svg'
import pedagogyIcon from '../assets/academics/icons/whychoose/Pedagogy.svg'
import educationalIcon from '../assets/academics/icons/whychoose/Educational.svg'
import careerIcon from '../assets/academics/icons/whychoose/Career.svg'
import higherIcon from '../assets/academics/icons/whychoose/Higher.svg'

import careerTeacherImg from '../assets/academics/2.jpg'
import careerCoordinatorImg from '../assets/academics/7.jpg'
import careerConsultantImg from '../assets/academics/8.jpg'
import careerOnlineImg from '../assets/academics/5.jpg'
import careerContentImg from '../assets/academics/6.jpg'
import careerCurriculumImg from '../assets/academics/4.jpg'
import careerNgoImg from '../assets/academics/9.jpg'
import careerStudiesImg from '../assets/academics/1.jpg'
import careerScholarImg from '../assets/academics/3.jpg'

export const academicsData = {
  'B.Ed': {
    hero: {
      titlePrefix: 'Bachelor Of Education',
      highlight: '(B.Ed.)',
      description:
        'Prepare To Become A Skilled, Compassionate, And Future-Ready Educator Through A Professional Teacher Education Program That Combines Academic Knowledge With Practical Teaching Experience.',
      bgImage: bedHeroImg,
      primaryBtnText: 'Apply Now',
      primaryBtnHref: '#apply-now',
      secondaryBtnText: 'Download Syllabus',
      secondaryBtnHref: '#syllabus',
    },
    overview: {
      title: 'Program Overview',
      description:
        'The Bachelor of Education (B.Ed.) program is a two-year professional course designed to prepare aspiring teachers for secondary and higher secondary education. The program combines educational theory, classroom practice, teaching methodology, and professional ethics to develop competent educators capable of meeting the evolving needs of modern education.',
      highlightsTitle: 'Program Highlights',
      highlights: [
        '2 Years Professional Program',
        'School Internship & Teaching Practice',
        'Experienced Faculty Mentorship',
      ],
      image: bedProgramImg,
      imageAlt: 'Students in MTCE Computer Lab',
    },
    whyChoose: {
      title: 'Why Choose B.Ed?',
      points: [
        {
          icon: teacherIcon,
          title: 'Professional Teacher Training',
          description:
            'Develop the knowledge and skills required for effective classroom teaching.',
        },
        {
          icon: teachingIcon,
          title: 'Practical Teaching Experience',
          description:
            'Gain real-world exposure through internships and teaching practice.',
        },
        {
          icon: pedagogyIcon,
          title: 'Modern Pedagogy',
          description:
            'Learn innovative teaching methods and educational technologies.',
        },
        {
          icon: educationalIcon,
          title: 'Educational Leadership',
          description:
            'Build confidence, communication, and classroom management skills.',
        },
        {
          icon: careerIcon,
          title: 'Career Readiness',
          description:
            'Prepare for teaching careers in schools and educational institutions.',
        },
        {
          icon: higherIcon,
          title: 'Higher Education Opportunities',
          description:
            'Build a strong foundation for advanced studies in education.',
        },
      ],
    },
    whatYouWillLearn: {
      title: 'What You Will Learn',
      topics: [
        {
          icon: Brain,
          title: 'Educational Psychology',
          description:
            'Understanding student behaviour, learning processes, and motivation.',
        },
        {
          icon: GraduationCap,
          title: 'Teaching Methodology',
          description:
            'Effective instructional strategies and classroom management.',
        },
        {
          icon: Layers,
          title: 'Curriculum Planning',
          description:
            'Designing meaningful and engaging learning experiences.',
        },
        {
          icon: CheckSquare,
          title: 'Assessment & Evaluation',
          description:
            'Measuring student progress and academic achievement.',
        },
        {
          icon: Monitor,
          title: 'Educational Technology',
          description:
            'Integrating ICT tools into teaching and learning.',
        },
        {
          icon: ShieldCheck,
          title: 'Professional Ethics',
          description:
            'Developing responsible and ethical teaching practices.',
        },
      ],
    },
    eligibility: {
      title: 'Eligibility Criteria',
      criteria: [
        {
          icon: GraduationCap,
          title: 'Educational Qualification',
          points: [
            "Bachelor's Degree (B.A., B.Sc., B.Com. or equivalent) from a recognised university.",
            'Commerce and Economics candidates must possess a Postgraduate Degree.',
            'Bachelor of Engineering/Technology (B.E.) or (B.Tech) graduates are also eligible.',
            'B.Sc. Microbiology graduates are also eligible.',
          ],
        },
        {
          icon: Percent,
          title: 'Minimum Marks',
          points: [
            'Minimum 50% marks in the qualifying degree.',
            'Relaxation as per Government and University norms.',
          ],
        },
        {
          icon: User,
          title: 'Age Limit',
          points: ['No upper age limit for admission to the program.'],
        },
      ],
    },
    admission: {
      title: 'Admission Procedure',
      steps: [
        { step: 'Step 1', title: 'Eligibility Verification', align: 'right' },
        { step: 'Step 2', title: 'Application Submission', align: 'left' },
        { step: 'Step 3', title: 'Document Verification', align: 'right' },
        { step: 'Step 4', title: 'Counselling & Admission Process', align: 'left' },
        { step: 'Step 5', title: 'Fee Payment & Admission Confirmation', align: 'right' },
      ],
    },
    practical: {
      title: 'Practical Training Components',
      components: [
        {
          icon: School,
          title: 'School Internship',
          description: 'Hands-on teaching experience in schools.',
        },
        {
          icon: Eye,
          title: 'Classroom Observation',
          description: 'Understanding real classroom environments.',
        },
        {
          icon: FileText,
          title: 'Lesson Planning',
          description: 'Designing effective instructional plans.',
        },
        {
          icon: Mic,
          title: 'Micro Teaching',
          description: 'Developing teaching competencies through practice sessions.',
        },
        {
          icon: FlaskConical,
          title: 'Educational Projects',
          description: 'Research and project-based learning activities.',
        },
      ],
    },
    scope: {
      title: 'Scope of B.Ed.',
      scopes: [
        {
          icon: Building,
          title: 'School Education',
          description:
            'Teach at secondary and higher secondary levels in government and private institutions.',
        },
        {
          icon: Award,
          title: 'Educational Leadership',
          description:
            'Progress towards academic coordination and administration roles.',
        },
        {
          icon: BookMarked,
          title: 'Higher Education',
          description:
            'Pursue M.Ed., M.A. Education, and research programmes.',
        },
        {
          icon: LaptopMinimal,
          title: 'Educational Technology',
          description:
            'Explore opportunities in ed-tech and online learning platforms.',
        },
        {
          icon: HeartHandshake,
          title: 'Community Development',
          description:
            'Contribute to educational initiatives and social development programs.',
        },
      ],
    },
    careers: {
      title: 'Career Opportunities',
      careers: [
        {
          title: 'School Teacher',
          description: 'Government, private, and international schools.',
          image: careerTeacherImg,
        },
        {
          title: 'Academic Coordinator',
          description: 'Support academic planning and program management.',
          image: careerCoordinatorImg,
        },
        {
          title: 'Educational Consultant',
          description: 'Provide guidance and educational solutions.',
          image: careerConsultantImg,
        },
        {
          title: 'Online Educator',
          description: 'Teach through digital learning platforms.',
          image: careerOnlineImg,
        },
        {
          title: 'Educational Content Developer',
          description: 'Create curriculum materials and learning resources.',
          image: careerContentImg,
        },
        {
          title: 'Curriculum Designer',
          description: 'Develop instructional content for schools and institutions.',
          image: careerCurriculumImg,
        },
        {
          title: 'NGO & Community Educator',
          description:
            'Work in literacy, child development, and educational outreach programs.',
          image: careerNgoImg,
        },
        {
          title: 'Higher Studies',
          description:
            'Pursue M.Ed., M.Phil., Ph.D., and other advanced qualifications.',
          image: careerStudiesImg,
        },
      ],
    },
  },

  'M.Ed': {
    hero: {
      titlePrefix: 'Master Of Education',
      highlight: '(M.Ed)',
      description:
        'Advance Your Expertise In Educational Leadership, Research, Curriculum Development, And Teacher Education With A Rigorous Postgraduate Program Designed For Future Academic Leaders And Education Professionals.',
      bgImage: medHeroImg,
      primaryBtnText: 'Apply Here',
      primaryBtnHref: '#apply-now',
      secondaryBtnText: 'Download Syllabus',
      secondaryBtnHref: '#syllabus',
    },
    overview: {
      title: 'Program Overview',
      description:
        'The Master of Education (M.Ed) program is a two-year postgraduate degree designed to provide advanced knowledge in educational theory, research, policy, and practice. The program prepares educators for leadership roles in teaching, administration, curriculum development, and educational research.',
      highlightsTitle: 'Program Highlights',
      highlights: [
        '2 Years Postgraduate Program',
        'Research & Dissertation Work',
        'Advanced Educational Studies',
        'Leadership & Professional Development',
      ],
      image: medProgramImg,
      imageAlt: 'M.Ed. Classroom Instruction',
    },
    whyChoose: {
      title: 'Why Choose M.Ed?',
      points: [
        {
          icon: ShieldCheck,
          title: 'Educational Leadership',
          description:
            'Develop the skills required to lead educational institutions and academic initiatives.',
        },
        {
          icon: BookOpen,
          title: 'Research Excellence',
          description:
            'Build strong research capabilities through dissertation work and field studies.',
        },
        {
          icon: Presentation,
          title: 'Advanced Pedagogy',
          description:
            'Explore innovative teaching strategies and educational practices.',
        },
        {
          icon: FileText,
          title: 'Curriculum Development',
          description:
            'Gain expertise in designing and evaluating educational programs.',
        },
        {
          icon: Landmark,
          title: 'Policy & Administration',
          description:
            'Understand educational systems, governance, and policy implementation.',
        },
        {
          icon: TrendingUp,
          title: 'Career Advancement',
          description:
            'Open pathways to higher-level academic, administrative, and research positions.',
        },
      ],
    },
    whatYouWillLearn: {
      title: 'What You Will Learn',
      topics: [
        {
          icon: Search,
          title: 'Educational Research',
          description: 'Research methodologies, data analysis, and academic inquiry.',
        },
        {
          icon: Brain,
          title: 'Educational Psychology',
          description:
            'Advanced understanding of learning, development, and motivation.',
        },
        {
          icon: Layers,
          title: 'Curriculum Studies',
          description: 'Curriculum design, implementation, and evaluation.',
        },
        {
          icon: Flag,
          title: 'Educational Leadership',
          description:
            'School leadership, administration, and institutional management.',
        },
        {
          icon: ClipboardList,
          title: 'Policy & Planning',
          description: 'Educational policy analysis and strategic planning.',
        },
        {
          icon: GraduationCap,
          title: 'Teacher Education',
          description:
            'Professional development and teacher training methodologies.',
        },
        {
          icon: CheckSquare,
          title: 'Assessment & Evaluation',
          description: 'Educational measurement and performance assessment.',
        },
        {
          icon: Monitor,
          title: 'Educational Technology',
          description:
            'Technology integration and digital learning environments.',
        },
      ],
    },
    eligibility: {
      title: 'Eligibility Criteria',
      criteria: [
        {
          icon: GraduationCap,
          title: 'Educational Qualification',
          points: [
            'B.Ed degree from a recognized university.',
            'Degree must be recognized by NCTE.',
          ],
        },
        {
          icon: Percent,
          title: 'Minimum Marks',
          points: [
            'Minimum 50% aggregate marks in B.Ed.',
            'Relaxation as per Government and University norms.',
          ],
        },
        {
          icon: Award,
          title: 'Recognition',
          points: [
            'Candidates must possess a valid and recognized teacher education qualification.',
          ],
        },
      ],
    },
    admission: {
      title: 'Admission Procedure',
      steps: [
        { step: 'Step 1', title: 'Eligibility Verification', align: 'right' },
        { step: 'Step 2', title: 'Application Submission', align: 'left' },
        { step: 'Step 3', title: 'Document Verification', align: 'right' },
        { step: 'Step 4', title: 'Counselling & Admission Process', align: 'left' },
        { step: 'Step 5', title: 'Fee Payment & Admission Confirmation', align: 'right' },
      ],
    },
    practical: {
      title: 'Research & Practical Components',
      components: [
        {
          icon: BookOpen,
          title: 'Dissertation Project',
          description: 'Independent research on educational issues and innovations.',
        },
        {
          icon: Compass,
          title: 'Field Studies',
          description: 'Practical investigation of educational environments and practices.',
        },
        {
          icon: Search,
          title: 'Educational Research',
          description: 'Data collection, analysis, and interpretation.',
        },
        {
          icon: Users,
          title: 'Academic Seminars',
          description: 'Participation in workshops, conferences, and scholarly discussions.',
        },
        {
          icon: FileText,
          title: 'Case Studies',
          description: 'Analysis of educational systems, policies, and institutions.',
        },
      ],
    },
    scope: {
      title: 'Scope of M.Ed.',
      scopes: [
        {
          icon: Users,
          title: 'Teacher Education',
          description:
            'Train future teachers in colleges of education and teacher training institutions.',
        },
        {
          icon: Award,
          title: 'Educational Leadership',
          description:
            'Progress into principal, coordinator, and administrative roles.',
        },
        {
          icon: BookOpen,
          title: 'Research & Higher Studies',
          description:
            'Foundation for M.Phil., Ph.D., and advanced academic research.',
        },
        {
          icon: Layers,
          title: 'Curriculum & Policy Development',
          description:
            'Contribute to educational planning and curriculum design.',
        },
        {
          icon: Laptop,
          title: 'Educational Technology',
          description:
            'Support innovation in digital learning and instructional design.',
        },
        {
          icon: Globe,
          title: 'International Opportunities',
          description:
            'Explore educational consultancy, curriculum development, and academic roles globally.',
        },
      ],
    },
    careers: {
      title: 'Career Opportunities',
      careers: [
        {
          title: 'Lecturer / Assistant Professor',
          description:
            'Teach in Colleges of Education and Teacher Training Institutions.',
          image: careerTeacherImg,
        },
        {
          title: 'Teacher Educator',
          description:
            'Prepare future teachers through professional training programs.',
          image: careerContentImg,
        },
        {
          title: 'Principal / Academic Leader',
          description:
            'Lead educational institutions and academic departments.',
          image: careerCoordinatorImg,
        },
        {
          title: 'Curriculum Developer',
          description:
            'Design learning resources, training materials, and educational programs.',
          image: careerConsultantImg,
        },
        {
          title: 'Educational Researcher',
          description:
            'Conduct research in schools, universities, and educational organisations.',
          image: careerOnlineImg,
        },
        {
          title: 'Education Officer',
          description:
            'Work in government and educational departments.',
          image: careerCurriculumImg,
        },
        {
          title: 'Educational Consultant',
          description:
            'Provide guidance on teaching, curriculum, and institutional development.',
          image: careerNgoImg,
        },
        {
          title: 'Instructional Designer',
          description:
            'Create digital learning experiences and educational content.',
          image: careerStudiesImg,
        },
        {
          title: 'Research Scholar',
          description:
            'Pursue doctoral studies and advanced academic careers.',
          image: careerScholarImg,
        },
      ],
    },
  },
}
