import SectionTitle from './SectionTitle';

const Resume = () => {
  return (
    <section id="resume" className="resume py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Resume</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-custom-dark-gray flex items-center">
              <span className="w-1 h-8 bg-custom-blue mr-3 rounded"></span>
              Summary
            </h3>
            <div className="resume-item pb-0 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-3">
                Matthew Waldeck
              </h4>

              <p className="italic text-gray-700 leading-relaxed">
                Full-stack focused BSc Information Technology graduate with
                strong proficiency in modern front-end and back-end frameworks,
                cloud platforms and database systems.
              </p>
              {/* <ul className="pl-5 mt-2 space-y-1">
                <li>Durbanville, Cape Town</li>
                <li>(078) 921-3169</li>
                <li>Waldeck.mk@gmail.com</li>
              </ul> */}
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-custom-dark-gray flex items-center">
              <span className="w-1 h-8 bg-custom-blue mr-3 rounded"></span>
              Education
            </h3>
            <div className="resume-item bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-3">
                BSC IN INFORMATION TECHNOLOGY
              </h4>
              <h5 className="text-base bg-custom-blue text-white py-1.5 px-4 inline-block font-semibold mb-3 rounded-full">
                2021 - 2023
              </h5>

              <p className="italic text-gray-700 mb-2">Eduvos, Tygervalley, Western Cape</p>
              <p className="text-gray-600">
                Graduated with <span className="font-semibold text-custom-blue">Cum Laude</span> distinction for academic excellence.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-custom-dark-gray flex items-center">
              <span className="w-1 h-8 bg-custom-blue mr-3 rounded"></span>
              University Project
            </h3>
            <div className="resume-item bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-3">
                Biometric Facial Recognition Security App
              </h4>
              <h5 className="text-base bg-custom-blue text-white py-1.5 px-4 inline-block font-semibold mb-3 rounded-full">
                2023
              </h5>
              <p className="italic text-gray-700 mb-3">Client Project for Student Tech Expo</p>
              <ul className="pl-5 mt-2 space-y-2.5 list-disc marker:text-custom-blue">
                <li className="text-gray-600 leading-relaxed">
                  Developed a security app using Kotlin, Android Studio, Express
                  API, Node.js and MySQL.
                </li>
                <li className="text-gray-600 leading-relaxed">
                  Integrated advanced facial recognition for building access
                  authentication.
                </li>
                <li className="text-gray-600 leading-relaxed">
                  The project was successfully delivered and selected to
                  represent the department at a student tech expo.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-custom-dark-gray flex items-center">
              <span className="w-1 h-8 bg-custom-blue mr-3 rounded"></span>
              Certifications
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-50 text-custom-blue px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors">Microsoft Certified: Azure Fundamentals</span>
                <span className="bg-blue-50 text-custom-blue px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors">Azure Synapse Analytics for Data Engineers</span>
                <span className="bg-blue-50 text-custom-blue px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors">MTA: Database Fundamentals</span>
                <span className="bg-blue-50 text-custom-blue px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors">C# Complete A–Z Masterclass</span>
                <span className="bg-blue-50 text-custom-blue px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors">Microsoft SQL Server for Beginners</span>
                <span className="bg-blue-50 text-custom-blue px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors">MS Access 2019 Certificate</span>
                <span className="bg-blue-50 text-custom-blue px-4 py-2 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors">ML & GenAI (TensorFlow, GPT, OpenAI)</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-custom-dark-gray flex items-center">
              <span className="w-1 h-8 bg-custom-blue mr-3 rounded"></span>
              Professional Experience
            </h3>

            <div className="resume-item bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-green-500">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <h4 className="text-lg font-bold uppercase text-custom-blue">
                  Full Stack Developer
                </h4>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">CURRENT</span>
              </div>
              <h5 className="text-base bg-custom-blue text-white py-1.5 px-4 inline-block font-semibold mb-3 rounded-full">
                Dec 2025 - Present
              </h5>
              <p className="italic text-gray-700 mb-3 font-medium">E commerceafrica, Western Cape</p>
              <ul className="pl-5 mt-2 space-y-2.5 list-disc marker:text-custom-blue">
                <li className="text-gray-600 leading-relaxed">
                  Architect and maintain B2B eCommerce platforms for enterprise clients
                  including Jonsson Workwear, owning end-to-end feature delivery across
                  Shopify and Magento.
                </li>
                <li className="text-gray-600 leading-relaxed">
                  Integrate third-party systems (ERP, CRM, Plytix PIM) ensuring seamless data
                  flow and operational efficiency across client ecosystems.
                </li>
                <li className="text-gray-600 leading-relaxed">
                  Drive sprint-based delivery via Azure DevOps, maintaining high code quality
                  and rapid release cycles in a collaborative agile team.
                </li>
              </ul>
            </div>

            <div className="resume-item bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-3">
                Full Stack Developer
              </h4>
              <h5 className="text-base bg-custom-blue text-white py-1.5 px-4 inline-block font-semibold mb-3 rounded-full">
                Nov 2024 - Nov 2025
              </h5>
              <p className="italic text-gray-700 mb-3 font-medium">WBWR, Somerset West, Western Cape</p>
              <ul className="pl-5 mt-2 space-y-2.5 list-disc marker:text-custom-blue">
                <li>
                  Migrated the Vans.co.za storefront to Shopify Hydrogen,
                  creating a faster headless commerce experience.
                </li>
                <li>
                  Migrated the Crocssa.co.za storefront to Shopify Hydrogen,
                  delivering a more dynamic headless commerce experience.
                </li>
                <li>
                  Migrated the bashafrica.com (Birkenstock) storefront to Shopify Hydrogen,
                  delivering a more dynamic headless commerce experience.
                </li>
                <li>
                  Worked closely with marketing, design teams and Ares Holdings
                  clients to align branding and features with business goals.
                </li>
                <li>
                  Responsible for building dynamic components, integrating
                  Shopify APIs, and ensuring products were scalable and
                  performant.
                </li>
              </ul>
            </div>
            <div className="resume-item bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-3">
                Full Stack Developer
              </h4>
              <h5 className="text-base bg-custom-blue text-white py-1.5 px-4 inline-block font-semibold mb-3 rounded-full">
                May 2024 - Aug 2024
              </h5>
              <p className="italic text-gray-700 mb-3 font-medium">
                LOOM Property Insights, Pretoria, Gauteng
              </p>
              <ul className="pl-5 mt-2 space-y-2.5 list-disc marker:text-custom-blue">
                <li className="text-gray-600 leading-relaxed">
                  Built a project with live data, handling both frontend and
                  backend for property analytics systems.
                </li>
                <li className="text-gray-600 leading-relaxed">
                  Worked on Azure sprint tickets, conducted system testing, and
                  assisted with deployments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
