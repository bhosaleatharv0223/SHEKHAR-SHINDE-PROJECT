import { useState } from 'react';
import {
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  MessageCircle,
  Upload,
  User,
} from 'lucide-react';

const steps = [
  'School Details',
  'Student & Parent Info',
  'Loan Details',
  'Mobile Verify',
  'Documents',
  'Review & Submit',
];

const schoolBoards = [
  'CBSE',
  'ICSE',
  'State Board',
  'IB',
  'IGCSE',
  'NIOS',
  'Other',
];

const grades = [
  'Nursery',
  'LKG',
  'UKG',
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
  'Class 6',
  'Class 7',
  'Class 8',
  'Class 9',
  'Class 10',
  'Class 11',
  'Class 12',
];

const admissionStatuses = [
  'Admission Confirmed',
  'Awaiting Admission',
  'Already Studying (Fee Pending)',
];

const loanPurposes = [
  'Tuition Fees',
  'Admission Fees',
  'Books & Stationery',
  'Hostel Charges',
  'Transport Fees',
  'Laptop / Equipment',
  'Uniforms',
  'Exam Charges',
  'Other Expenses',
];

const relationships = [
  'Father',
  'Mother',
  'Guardian',
  'Other',
];

const genders = [
  'Male',
  'Female',
  'Other',
];

const creditScores = [
  'Excellent 750+',
  'Good 700–750',
  'Average 650–700',
  'Below 650',
  'Not Sure',
];

const tenures = [6, 12, 18, 24, 36, 48];

const collateralTypes = [
  'Property',
  'FD',
  'Other',
];

const studentDocuments = [
  { key: 'Student Aadhaar Card', label: 'Student Aadhaar Card', required: true },
  { key: 'Student Birth Certificate', label: 'Student Birth Certificate', required: true },
  { key: 'Student Photo', label: 'Student Photo', required: true },
  { key: 'Previous Marksheets', label: 'Previous Marksheets (Last 2 years)', required: true },
  { key: 'School Admission Letter', label: 'School Admission Letter / Fee Receipt', required: true },
  { key: 'School Fee Structure', label: 'School Fee Structure', required: true },
];

const parentDocuments = [
  { key: 'Parent PAN Card', label: 'Parent PAN Card', required: true },
  { key: 'Parent Aadhaar Card', label: 'Parent Aadhaar Card', required: true },
  { key: 'Parent Photo', label: 'Parent Photo', required: true },
  { key: 'Address Proof', label: 'Address Proof', required: true },
];

const salariedParentDocuments = [
  { key: 'Salary Slips', label: 'Salary Slips — Last 3 Months', required: true },
  { key: 'Form 16 / ITR', label: 'Form 16 / ITR', required: true },
  { key: 'Bank Statements 6 Months', label: 'Bank Statements — Last 6 Months', required: true },
  { key: 'Employment ID Proof', label: 'Employment ID Proof', required: true },
];

const selfEmployedParentDocuments = [
  { key: 'ITR 2-3 Years', label: 'ITR — Last 2–3 Years', required: true },
  { key: 'Bank Statements 12 Months', label: 'Bank Statements — Last 12 Months', required: true },
  { key: 'GST Registration', label: 'GST Registration (Optional)', required: false },
  { key: 'Business Proof', label: 'Business Proof', required: true },
];

const collateralDocuments = [
  { key: 'Property Papers', label: 'Property Papers (Optional)', required: false },
  { key: 'Fixed Deposit Proof', label: 'Fixed Deposit Proof (Optional)', required: false },
];

const initialFormData = {
  schoolName: '',
  schoolBoard: '',
  schoolCity: '',
  schoolState: '',
  grade: '',
  academicYear: '',
  totalSchoolFee: '',
  admissionStatus: '',
  loanPurposes: [] as string[],
  studentName: '',
  studentDob: '',
  studentGender: '',
  studentAadhaar: '',
  parentName: '',
  relationship: '',
  parentDob: '',
  parentPan: '',
  parentAadhaar: '',
  address: '',
  city: '',
  pinCode: '',
  parentEmploymentType: '',
  employerName: '',
  monthlySalary: '',
  workExperience: '',
  businessName: '',
  annualTurnover: '',
  businessVintage: '',
  creditScore: '',
  loanAmount: 200000,
  loanTenure: '24',
  existingEmi: '',
  collateralAvailable: '',
  collateralType: '',
  collateralValue: '',
  mobileNumber: '',
};

function SchoolFinanceFormStyles() {
  return (
    <style>
      {`
        @keyframes loanStepIn {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes loanFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes loanCardTap {
          0% { transform: scale(1); }
          50% { transform: scale(0.97); }
          100% { transform: scale(1); }
        }

        @keyframes successCircle {
          from { stroke-dashoffset: 240; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes successCheck {
          from { stroke-dashoffset: 70; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes confettiFall {
          0% { opacity: 0; transform: translateY(-24px) rotate(0deg); }
          15% { opacity: 1; }
          100% { opacity: 0; transform: translateY(130px) rotate(220deg); }
        }
      `}
    </style>
  );
}

function ProgressBar({ currentStep }) {
  return (
    <div className="mb-8 rounded-[24px] border border-white/95 bg-white/90 p-5 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px]">
      <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const completed = stepNumber < currentStep;
          const active = stepNumber === currentStep;

          return (
            <div key={step} className="relative flex flex-col items-center text-center">
              {index < steps.length - 1 && (
                <div
                  className={`absolute left-1/2 top-5 hidden h-0.5 w-full lg:block ${
                    completed ? 'bg-[#16A34A]' : 'border-t border-dashed border-gray-300'
                  }`}
                />
              )}
              <div
                className={`relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm transition-all duration-300 ${
                  completed
                    ? 'bg-[#16A34A] text-white shadow-lg shadow-green-500/25'
                    : active
                      ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/30 ring-8 ring-[#2563EB]/15 animate-pulse'
                      : 'border-2 border-gray-300 bg-white text-gray-400'
                }`}
              >
                {completed ? <Check className="h-5 w-5" /> : stepNumber}
              </div>
              <span
                className={`mt-3 text-xs transition-colors duration-300 ${
                  active ? 'text-[#1F2937]' : completed ? 'text-[#16A34A]' : 'text-gray-500'
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="group relative block pt-2">
      <span className="mb-2 block text-sm text-[#374151] transition-all duration-300 group-focus-within:-translate-y-1 group-focus-within:text-[#2563EB]">
        {label}
      </span>
      <div className="relative">
        {children}
        <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-[#2563EB] transition-all duration-300 group-focus-within:w-full" />
      </div>
    </label>
  );
}

function TextInput({ value, onChange, type = 'text', placeholder = '', readOnly = false }) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        readOnly={readOnly}
        className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 pr-11 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10 disabled:bg-gray-100"
      />
      {value && !readOnly ? (
        <CheckCircle2 className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#16A34A]" />
      ) : null}
    </div>
  );
}

function UploadBox({ documentItem, fileName, onUpload }) {
  const inputId = `upload-${documentItem.key.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <label
      htmlFor={inputId}
      className={`group flex min-h-44 cursor-pointer flex-col items-center rounded-2xl border-2 p-5 text-center transition-all duration-300 ${
        fileName
          ? 'border-[#16A34A] bg-green-50/80 shadow-lg shadow-green-500/10'
          : 'border-dashed border-[#2563EB] bg-white/80 hover:border-solid hover:bg-blue-50'
      }`}
    >
      <input
        id={inputId}
        type="file"
        className="hidden"
        onChange={(event) => onUpload(documentItem.key, event.target.files?.[0])}
      />
      <div
        className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
          fileName
            ? 'bg-[#16A34A] text-white'
            : 'bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white'
        }`}
      >
        {fileName ? <CheckCircle2 className="h-7 w-7" /> : <Upload className="h-7 w-7" />}
      </div>
      <span className="mb-2 text-[#1F2937]">{documentItem.label}</span>
      <span
        className={`mb-3 rounded-full px-3 py-1 text-xs ${
          documentItem.required ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600'
        }`}
      >
        {documentItem.required ? 'Required' : 'Optional'}
      </span>
      <span className={`break-all text-sm ${fileName ? 'text-[#16A34A]' : 'text-gray-500'}`}>
        {fileName || 'Upload file'}
      </span>
      {fileName ? <span className="mt-1 text-xs text-gray-500">File selected</span> : null}
    </label>
  );
}

function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      className={`rounded-xl bg-gradient-to-r from-[#2563EB] to-[#1E40AF] px-8 py-3 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function BackButton({ children, ...props }) {
  return (
    <button
      className="rounded-xl border border-[#2563EB]/25 px-8 py-3 text-[#1F2937] transition-all duration-300 hover:bg-blue-50 hover:text-[#2563EB] active:scale-[0.97]"
      {...props}
    >
      {children}
    </button>
  );
}

export function SchoolFinanceForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const toggleLoanPurpose = (purpose) => {
    setFormData((current) => ({
      ...current,
      loanPurposes: current.loanPurposes.includes(purpose)
        ? current.loanPurposes.filter((p) => p !== purpose)
        : [...current.loanPurposes, purpose],
    }));
  };

  const allDocuments = [
    ...studentDocuments,
    ...parentDocuments,
    ...(formData.parentEmploymentType === 'Salaried' ? salariedParentDocuments : selfEmployedParentDocuments),
    ...(formData.collateralAvailable === 'Yes' ? collateralDocuments : []),
  ];

  const uploadedRequiredCount = allDocuments.filter(
    (documentItem) => documentItem.required && uploadedFiles[documentItem.key],
  ).length;

  const requiredDocumentsCount = allDocuments.filter((documentItem) => documentItem.required).length;
  const uploadedTotalCount = allDocuments.filter((documentItem) => uploadedFiles[documentItem.key]).length;

  const goNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((step) => step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(0, 1);
    const nextOtp = [...otp];
    nextOtp[index] = digit;
    setOtp(nextOtp);

    if (digit && index < 5) {
      document.getElementById(`school-finance-otp-${index + 1}`)?.focus();
    }
  };

  const handleUpload = (key, file) => {
    if (!file) return;
    setUploadedFiles((current) => ({ ...current, [key]: file.name }));
  };

  const submitApplication = () => {
    if (!termsAccepted) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen overflow-hidden py-16">
        <SchoolFinanceFormStyles />
        <div className="absolute inset-0 z-0">
          <img
            src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-50/80" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-10 z-10 mx-auto h-40 max-w-xl">
          {['left-8 bg-[#2563EB]', 'left-24 bg-[#16A34A]', 'left-44 bg-yellow-400', 'right-16 bg-[#2563EB]', 'right-32 bg-[#16A34A]'].map((item, index) => (
            <span
              key={item}
              className={`absolute h-3 w-2 rounded-sm ${item} [animation:confettiFall_1.5s_ease-in-out_infinite]`}
              style={{ animationDelay: `${index * 180}ms` }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <div className="rounded-[24px] border border-white/95 bg-white/90 p-8 text-center shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-10 [animation:loanFadeUp_0.6s_ease-out_both]">
            <svg className="mx-auto mb-5 h-24 w-24" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="#16A34A"
                strokeWidth="7"
                strokeDasharray="240"
                strokeDashoffset="240"
                className="[animation:successCircle_0.8s_ease-out_forwards]"
              />
              <path
                d="M32 51 L45 64 L70 36"
                fill="none"
                stroke="#16A34A"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="70"
                strokeDashoffset="70"
                className="[animation:successCheck_0.55s_ease-out_0.65s_forwards]"
              />
            </svg>
            <h1 className="mb-3 text-3xl text-[#1F2937] [animation:loanFadeUp_0.5s_ease-out_0.15s_both]">
              Application Submitted Successfully! 🎉
            </h1>
            <p className="mb-2 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.25s_both]">
              Application ID
            </p>
            <p className="mb-5 text-3xl text-[#2563EB] [animation:loanFadeUp_0.5s_ease-out_0.35s_both]">
              SA-SF-{Math.random().toString().slice(2, 10)}
            </p>
            <p className="mb-8 text-gray-600 [animation:loanFadeUp_0.5s_ease-out_0.45s_both]">
              Our school finance expert will contact you within 24 hours. We will find the best lender for your child's school fees.
            </p>
            <a
              href="https://wa.me/917758969798"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] [animation:loanFadeUp_0.5s_ease-out_0.55s_both]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Our Expert
            </a>
            <div className="mt-6">
              <button
                onClick={() => window.location.href = '/'}
                className="rounded-xl border-2 border-[#2563EB] text-[#2563EB] px-8 py-3 transition-all duration-300 hover:bg-[#2563EB] hover:text-white active:scale-[0.97]"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden py-12">
      <SchoolFinanceFormStyles />
      <div className="absolute inset-0 z-0">
        <img
          src="/src/imports/WhatsApp_Image_2026-05-05_at_4.25.22_PM.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-50/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ProgressBar currentStep={currentStep} />

        <div className="mx-auto rounded-[24px] border border-white/95 bg-white/90 p-6 shadow-[0_20px_60px_rgba(37,99,235,0.15)] backdrop-blur-[20px] sm:p-8 [animation:loanStepIn_0.3s_ease-in-out_both]">
          {currentStep === 1 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-2 text-2xl text-[#1F2937] sm:text-3xl">Tell us about the school</h1>
              <p className="mb-6 text-gray-600">This helps us find the right lender for your child's school</p>
              
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="School Name *">
                  <TextInput
                    value={formData.schoolName}
                    onChange={(value) => updateFormData('schoolName', value)}
                  />
                </Field>
                <Field label="School Board *">
                  <select
                    value={formData.schoolBoard}
                    onChange={(event) => updateFormData('schoolBoard', event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                  >
                    <option value="">Select board</option>
                    {schoolBoards.map((board) => (
                      <option key={board} value={board}>{board}</option>
                    ))}
                  </select>
                </Field>
                <Field label="School City *">
                  <TextInput
                    value={formData.schoolCity}
                    onChange={(value) => updateFormData('schoolCity', value)}
                  />
                </Field>
                <Field label="School State *">
                  <TextInput
                    value={formData.schoolState}
                    onChange={(value) => updateFormData('schoolState', value)}
                  />
                </Field>
                <Field label="Class / Grade of Student *">
                  <select
                    value={formData.grade}
                    onChange={(event) => updateFormData('grade', event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                  >
                    <option value="">Select grade</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Academic Year *">
                  <TextInput
                    value={formData.academicYear}
                    onChange={(value) => updateFormData('academicYear', value)}
                    placeholder="e.g. 2025–26"
                  />
                </Field>
                <Field label="Total Annual School Fee (₹) *">
                  <TextInput
                    type="number"
                    value={formData.totalSchoolFee}
                    onChange={(value) => updateFormData('totalSchoolFee', value)}
                  />
                </Field>
                <Field label="Admission Status *">
                  <select
                    value={formData.admissionStatus}
                    onChange={(event) => updateFormData('admissionStatus', event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                  >
                    <option value="">Select status</option>
                    {admissionStatuses.map((status) => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm text-[#374151]">Loan Purpose (select all that apply)</p>
                <div className="flex flex-wrap gap-3">
                  {loanPurposes.map((purpose) => (
                    <button
                      key={purpose}
                      onClick={() => toggleLoanPurpose(purpose)}
                      className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                        formData.loanPurposes.includes(purpose)
                          ? 'border-[#2563EB] bg-[#2563EB] text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-[#2563EB] hover:text-[#2563EB]'
                      }`}
                    >
                      {formData.loanPurposes.includes(purpose) && <Check className="inline w-4 h-4 mr-1" />}
                      {purpose}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <PrimaryButton onClick={goNext}>Next</PrimaryButton>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h2 className="mb-6 text-xl text-[#1F2937] border-l-4 border-[#2563EB] pl-4">Section A — Student Details</h2>
              
              <div className="grid gap-5 md:grid-cols-2 mb-8">
                <Field label="Student Full Name *">
                  <TextInput
                    value={formData.studentName}
                    onChange={(value) => updateFormData('studentName', value)}
                  />
                </Field>
                <Field label="Date of Birth *">
                  <TextInput
                    type="date"
                    value={formData.studentDob}
                    onChange={(value) => updateFormData('studentDob', value)}
                  />
                </Field>
                <Field label="Gender *">
                  <select
                    value={formData.studentGender}
                    onChange={(event) => updateFormData('studentGender', event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                  >
                    <option value="">Select gender</option>
                    {genders.map((gender) => (
                      <option key={gender} value={gender}>{gender}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Aadhaar Number *">
                  <TextInput
                    value={formData.studentAadhaar}
                    onChange={(value) => updateFormData('studentAadhaar', value)}
                  />
                </Field>
              </div>

              <h2 className="mb-6 text-xl text-[#1F2937] border-l-4 border-[#16A34A] pl-4">Section B — Parent / Guardian Details</h2>
              
              <div className="grid gap-5 md:grid-cols-2 mb-6">
                <Field label="Parent / Guardian Full Name *">
                  <TextInput
                    value={formData.parentName}
                    onChange={(value) => updateFormData('parentName', value)}
                  />
                </Field>
                <Field label="Relationship *">
                  <select
                    value={formData.relationship}
                    onChange={(event) => updateFormData('relationship', event.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                  >
                    <option value="">Select relationship</option>
                    {relationships.map((rel) => (
                      <option key={rel} value={rel}>{rel}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Date of Birth *">
                  <TextInput
                    type="date"
                    value={formData.parentDob}
                    onChange={(value) => updateFormData('parentDob', value)}
                  />
                </Field>
                <Field label="PAN Card Number *">
                  <TextInput
                    value={formData.parentPan}
                    onChange={(value) => updateFormData('parentPan', value.toUpperCase())}
                  />
                </Field>
                <Field label="Aadhaar Number *">
                  <TextInput
                    value={formData.parentAadhaar}
                    onChange={(value) => updateFormData('parentAadhaar', value)}
                  />
                </Field>
                <Field label="City *">
                  <TextInput
                    value={formData.city}
                    onChange={(value) => updateFormData('city', value)}
                  />
                </Field>
                <div className="md:col-span-2">
                  <Field label="Current Address *">
                    <textarea
                      value={formData.address}
                      onChange={(event) => updateFormData('address', event.target.value)}
                      className="min-h-28 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    />
                  </Field>
                </div>
                <Field label="PIN Code *">
                  <TextInput
                    value={formData.pinCode}
                    onChange={(value) => updateFormData('pinCode', value)}
                  />
                </Field>
              </div>

              <p className="mb-4 text-sm text-[#374151] font-medium">Employment Type</p>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <button
                  onClick={() => updateFormData('parentEmploymentType', 'Salaried')}
                  className={`relative rounded-2xl border-2 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:[animation:loanCardTap_0.22s_ease-out] ${
                    formData.parentEmploymentType === 'Salaried'
                      ? 'border-[#2563EB] bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-xl shadow-blue-500/25'
                      : 'border-[#2563EB]/25 bg-white text-[#1F2937]'
                  }`}
                >
                  {formData.parentEmploymentType === 'Salaried' ? (
                    <CheckCircle2 className="absolute right-5 top-5 h-6 w-6 text-[#16A34A]" />
                  ) : null}
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                      formData.parentEmploymentType === 'Salaried' ? 'bg-white/15 text-white' : 'bg-blue-50 text-[#2563EB]'
                    }`}
                  >
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className={`mb-1 text-lg ${formData.parentEmploymentType === 'Salaried' ? 'text-white' : 'text-[#1F2937]'}`}>
                    Salaried
                  </h3>
                  <p className={formData.parentEmploymentType === 'Salaried' ? 'text-blue-100 text-sm' : 'text-gray-600 text-sm'}>
                    Govt or private employee
                  </p>
                </button>

                <button
                  onClick={() => updateFormData('parentEmploymentType', 'Self Employed')}
                  className={`relative rounded-2xl border-2 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:[animation:loanCardTap_0.22s_ease-out] ${
                    formData.parentEmploymentType === 'Self Employed'
                      ? 'border-[#2563EB] bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-xl shadow-blue-500/25'
                      : 'border-[#2563EB]/25 bg-white text-[#1F2937]'
                  }`}
                >
                  {formData.parentEmploymentType === 'Self Employed' ? (
                    <CheckCircle2 className="absolute right-5 top-5 h-6 w-6 text-[#16A34A]" />
                  ) : null}
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                      formData.parentEmploymentType === 'Self Employed' ? 'bg-white/15 text-white' : 'bg-blue-50 text-[#2563EB]'
                    }`}
                  >
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className={`mb-1 text-lg ${formData.parentEmploymentType === 'Self Employed' ? 'text-white' : 'text-[#1F2937]'}`}>
                    Self Employed
                  </h3>
                  <p className={formData.parentEmploymentType === 'Self Employed' ? 'text-blue-100 text-sm' : 'text-gray-600 text-sm'}>
                    Business owner
                  </p>
                </button>
              </div>

              {formData.parentEmploymentType === 'Salaried' && (
                <div className="grid gap-5 md:grid-cols-2 mb-6 [animation:loanFadeUp_0.35s_ease-out_both]">
                  <Field label="Employer Name *">
                    <TextInput
                      value={formData.employerName}
                      onChange={(value) => updateFormData('employerName', value)}
                    />
                  </Field>
                  <Field label="Monthly Salary (₹) *">
                    <TextInput
                      type="number"
                      value={formData.monthlySalary}
                      onChange={(value) => updateFormData('monthlySalary', value)}
                    />
                  </Field>
                  <Field label="Work Experience (years)">
                    <TextInput
                      type="number"
                      value={formData.workExperience}
                      onChange={(value) => updateFormData('workExperience', value)}
                    />
                  </Field>
                </div>
              )}

              {formData.parentEmploymentType === 'Self Employed' && (
                <div className="grid gap-5 md:grid-cols-2 mb-6 [animation:loanFadeUp_0.35s_ease-out_both]">
                  <Field label="Business Name *">
                    <TextInput
                      value={formData.businessName}
                      onChange={(value) => updateFormData('businessName', value)}
                    />
                  </Field>
                  <Field label="Annual Turnover (₹) *">
                    <TextInput
                      type="number"
                      value={formData.annualTurnover}
                      onChange={(value) => updateFormData('annualTurnover', value)}
                    />
                  </Field>
                  <Field label="Business Vintage (years)">
                    <TextInput
                      type="number"
                      value={formData.businessVintage}
                      onChange={(value) => updateFormData('businessVintage', value)}
                    />
                  </Field>
                </div>
              )}

              <Field label="Approximate Credit Score *">
                <select
                  value={formData.creditScore}
                  onChange={(event) => updateFormData('creditScore', event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                >
                  <option value="">Select credit score</option>
                  {creditScores.map((score) => (
                    <option key={score} value={score}>{score}</option>
                  ))}
                </select>
              </Field>

              <div className="mt-8 flex justify-between">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext}>Next</PrimaryButton>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Loan Details</h1>
              
              <div className="space-y-6">
                <Field label={`Total School Fee: ₹${Number(formData.totalSchoolFee || 0).toLocaleString('en-IN')}`}>
                  <TextInput
                    type="number"
                    value={formData.totalSchoolFee}
                    onChange={(value) => updateFormData('totalSchoolFee', value)}
                    readOnly
                  />
                </Field>

                <Field label={`Loan Amount Required (₹): ${Number(formData.loanAmount).toLocaleString('en-IN')}`}>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={formData.loanAmount}
                    onChange={(event) => updateFormData('loanAmount', Number(event.target.value))}
                    className="h-2 w-full appearance-none rounded-full bg-blue-100 accent-[#2563EB]"
                  />
                </Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Loan Tenure">
                    <select
                      value={formData.loanTenure}
                      onChange={(event) => updateFormData('loanTenure', event.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    >
                      {tenures.map((tenure) => (
                        <option key={tenure} value={tenure}>
                          {tenure} months
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Existing EMI (₹) — if any">
                    <TextInput
                      type="number"
                      value={formData.existingEmi}
                      onChange={(value) => updateFormData('existingEmi', value)}
                    />
                  </Field>
                </div>

                <Field label="Collateral Available">
                  <div className="flex gap-4">
                    <button
                      onClick={() => updateFormData('collateralAvailable', 'Yes')}
                      className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                        formData.collateralAvailable === 'Yes'
                          ? 'border-[#2563EB] bg-[#2563EB] text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-[#2563EB]'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => updateFormData('collateralAvailable', 'No')}
                      className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                        formData.collateralAvailable === 'No'
                          ? 'border-[#2563EB] bg-[#2563EB] text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-[#2563EB]'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </Field>

                {formData.collateralAvailable === 'Yes' && (
                  <div className="grid gap-5 md:grid-cols-2 [animation:loanFadeUp_0.35s_ease-out_both]">
                    <Field label="Type">
                      <select
                        value={formData.collateralType}
                        onChange={(event) => updateFormData('collateralType', event.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                      >
                        <option value="">Select type</option>
                        {collateralTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Estimated Value (₹)">
                      <TextInput
                        type="number"
                        value={formData.collateralValue}
                        onChange={(value) => updateFormData('collateralValue', value)}
                      />
                    </Field>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-between">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext}>Next</PrimaryButton>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">
                Verify Your Mobile Number
              </h1>
              <div className="max-w-xl">
                <Field label="Mobile Number">
                  <div className="flex">
                    <span className="rounded-l-xl border border-r-0 border-gray-200 bg-blue-50 px-4 py-3 text-[#1F2937]">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(event) => updateFormData('mobileNumber', event.target.value)}
                      className="w-full rounded-r-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#1F2937] shadow-sm transition-all duration-300 focus:border-[#2563EB] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10"
                    />
                  </div>
                </Field>

                <PrimaryButton onClick={() => setOtpSent(true)} className="mt-5">
                  Send OTP
                </PrimaryButton>

                {otpSent && (
                  <div className="mt-8 [animation:loanFadeUp_0.35s_ease-out_both]">
                    <div className="mb-5 flex gap-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`school-finance-otp-${index}`}
                          type="text"
                          value={digit}
                          onChange={(event) => handleOtpChange(index, event.target.value)}
                          className={`h-[60px] w-[50px] border-0 border-b-4 bg-transparent text-center text-2xl text-[#1F2937] outline-none transition-all duration-300 ${
                            mobileVerified
                              ? 'border-[#16A34A]'
                              : digit
                                ? 'border-[#2563EB] shadow-[0_10px_24px_rgba(37,99,235,0.18)]'
                                : 'border-gray-300 focus:border-[#2563EB] focus:shadow-[0_10px_24px_rgba(37,99,235,0.18)]'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setMobileVerified(true)}
                        className="rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-7 py-3 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
                      >
                        Verify OTP
                      </button>
                      <button
                        onClick={() => setOtp(['', '', '', '', '', ''])}
                        className="text-[#2563EB] transition-colors hover:text-[#1E40AF]"
                      >
                        Resend OTP
                      </button>
                    </div>
                    {mobileVerified && (
                      <p className="mt-4 flex items-center gap-2 text-[#16A34A]">
                        <CheckCircle2 className="h-5 w-5" />
                        Mobile number verified
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-between">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                {mobileVerified && <PrimaryButton onClick={goNext}>Next</PrimaryButton>}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-2 text-2xl text-[#1F2937] sm:text-3xl">Upload Documents</h1>

              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-xl text-[#1F2937] border-l-4 border-[#2563EB] pl-4">Section A — Student Documents</h2>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {studentDocuments.map((documentItem) => (
                      <UploadBox
                        key={documentItem.key}
                        documentItem={documentItem}
                        fileName={uploadedFiles[documentItem.key]}
                        onUpload={handleUpload}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-xl text-[#1F2937] border-l-4 border-[#16A34A] pl-4">Section B — Parent Documents</h2>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {parentDocuments.map((documentItem) => (
                      <UploadBox
                        key={documentItem.key}
                        documentItem={documentItem}
                        fileName={uploadedFiles[documentItem.key]}
                        onUpload={handleUpload}
                      />
                    ))}
                  </div>
                </div>

                {formData.parentEmploymentType === 'Salaried' && (
                  <div className="[animation:loanFadeUp_0.35s_ease-out_both]">
                    <h2 className="mb-4 text-xl text-[#1F2937] border-l-4 border-[#2563EB] pl-4">Employment Documents (Salaried)</h2>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {salariedParentDocuments.map((documentItem) => (
                        <UploadBox
                          key={documentItem.key}
                          documentItem={documentItem}
                          fileName={uploadedFiles[documentItem.key]}
                          onUpload={handleUpload}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {formData.parentEmploymentType === 'Self Employed' && (
                  <div className="[animation:loanFadeUp_0.35s_ease-out_both]">
                    <h2 className="mb-4 text-xl text-[#1F2937] border-l-4 border-[#2563EB] pl-4">Employment Documents (Self Employed)</h2>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {selfEmployedParentDocuments.map((documentItem) => (
                        <UploadBox
                          key={documentItem.key}
                          documentItem={documentItem}
                          fileName={uploadedFiles[documentItem.key]}
                          onUpload={handleUpload}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {formData.collateralAvailable === 'Yes' && (
                  <div className="[animation:loanFadeUp_0.35s_ease-out_both]">
                    <h2 className="mb-4 text-xl text-[#1F2937] border-l-4 border-[#F59E0B] pl-4">Section C — Collateral Documents</h2>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {collateralDocuments.map((documentItem) => (
                        <UploadBox
                          key={documentItem.key}
                          documentItem={documentItem}
                          fileName={uploadedFiles[documentItem.key]}
                          onUpload={handleUpload}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-between">
                <BackButton onClick={goPrevious}>Previous</BackButton>
                <PrimaryButton onClick={goNext}>Next</PrimaryButton>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="[animation:loanStepIn_0.3s_ease-in-out_both]">
              <h1 className="mb-6 text-2xl text-[#1F2937] sm:text-3xl">Review and Submit</h1>

              <div className="space-y-5">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                  <p className="mb-1 text-sm text-gray-500">Loan type</p>
                  <p className="text-lg text-[#1F2937]">School Finance</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">School Name</p>
                    <p className="text-[#1F2937]">{formData.schoolName}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">School Board</p>
                    <p className="text-[#1F2937]">{formData.schoolBoard}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Student Name</p>
                    <p className="text-[#1F2937]">{formData.studentName}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Class / Grade</p>
                    <p className="text-[#1F2937]">{formData.grade}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Parent Name</p>
                    <p className="text-[#1F2937]">{formData.parentName}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Total School Fee</p>
                    <p className="text-[#1F2937]">₹{Number(formData.totalSchoolFee || 0).toLocaleString('en-IN')}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Loan Amount</p>
                    <p className="text-[#1F2937]">₹{Number(formData.loanAmount).toLocaleString('en-IN')}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Tenure</p>
                    <p className="text-[#1F2937]">{formData.loanTenure} months</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm">
                    <p className="mb-1 text-sm text-gray-500">Documents uploaded</p>
                    <p className="text-[#1F2937]">
                      {uploadedTotalCount} uploaded, {uploadedRequiredCount} of {requiredDocumentsCount} required
                    </p>
                  </div>
                </div>

                <label className="flex items-start gap-3 text-gray-700">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(event) => setTermsAccepted(event.target.checked)}
                    className="mt-1 accent-[#2563EB]"
                  />
                  <span>Terms and conditions checkbox *</span>
                </label>

                <div className="flex justify-between gap-4">
                  <BackButton onClick={goPrevious}>Previous</BackButton>
                  <button
                    onClick={submitApplication}
                    disabled={!termsAccepted}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-8 py-4 text-white shadow-lg shadow-green-500/20 transition-all duration-300 hover:brightness-110 active:scale-[0.97] disabled:cursor-not-allowed disabled:from-gray-300 disabled:to-gray-300 disabled:shadow-none"
                  >
                    Submit School Finance Application
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
