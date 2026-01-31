import WindowControls from "../components/WindowControls";
import WindowWrapper from "../components/WindowWrapper";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <>
      <div className="flex h-9 items-center border-b border-gray-300 bg-gray-200 px-3 select-none">
        <WindowControls target="resume" />
        <h2 className="text-[13px] font-medium text-gray-600 flex-1 text-center">Resume</h2>
        <a href="files/resume.pdf" download className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
        </a>
      </div>
      <div className="max-h-137.5 overflow-y-scroll bg-gray-100">
        <Document file="files/resume.pdf" loading={<div className="h-60 w-60 p-3 flex">Loading Resume...</div>}>
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white shadow-md rounded-lg">
              <Page pageNumber={1} />
            </div>
            <div className="bg-white shadow-md rounded-lg">
              <Page pageNumber={2} />
            </div>
          </div>
        </Document>
      </div>

    </>
  )
}

const ResumeWrapped = WindowWrapper(Resume, 'resume');

export default ResumeWrapped