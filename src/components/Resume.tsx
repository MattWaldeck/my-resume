import SectionTitle from './SectionTitle';

const Resume = () => {
  return (
    <section id="resume" className="resume py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Resume</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-5 text-custom-dark-gray">
              Summary
            </h3>
            <div className="resume-item pb-0">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-2">
                Matthew Waldeck
              </h4>

              <p className="italic">
                Full-stack focused BSc Information Technology graduate with
                strong proficiency in modern front-end and back-end frameworks,
                cloud platforms and database systems.
              </p>
              <ul className="pl-5 mt-2 space-y-1">
                <li>Pinehurst, Durbanville, Cape Town</li>
                <li>(078) 921-3169</li>
                <li>Waldeck.mk@gmail.com</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-5 text-custom-dark-gray">
              Education
            </h3>
            <div className="resume-item">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-2">
                BSC IN INFORMATION TECHNOLOGY
              </h4>
              <h5 className="text-base bg-gray-200 py-1 px-3 inline-block font-semibold mb-2">
                2021 - 2023
              </h5>

              <p className="italic">Eduvos, Tygervalley, Western Cape</p>
              <p>
                Graduated with Cum Laude distinction for academic excellence.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-5 text-custom-dark-gray">
              University Project
            </h3>
            <div className="resume-item">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-2">
                Biometric Facial Recognition Security App
              </h4>
              <h5 className="text-base bg-gray-200 py-1 px-3 inline-block font-semibold mb-2">
                2023
              </h5>
              <p className="italic">Client Project for Student Tech Expo</p>{' '}
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>
                  Developed a security app using Kotlin, Android Studio, Express
                  API, Node.js and MySQL.
                </li>
                <li>
                  Integrated advanced facial recognition for building access
                  authentication.
                </li>
                <li>
                  The project was successfully delivered and selected to
                  represent the department at a student tech expo.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-5 text-custom-dark-gray">
              Professional Experience
            </h3>

            <div className="resume-item">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-2">
                Full Stack Developer
              </h4>
              <h5 className="text-base bg-gray-200 py-1 px-3 inline-block font-semibold mb-2">
                Nov 2024 - Present
              </h5>
              <p className="italic">WBWR, Somerset West, Western Cape</p>
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>
                  Migrated the Vans.co.za storefront to Shopify Hydrogen,
                  creating a faster headless commerce experience.
                </li>
                <li>
                  Migrated the Crocssa.co.za storefront to Shopify Hydrogen,
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
            <div className="resume-item">
              <h4 className="text-lg font-bold uppercase text-custom-blue mb-2">
                Full Stack Developer
              </h4>
              <h5 className="text-base bg-gray-200 py-1 px-3 inline-block font-semibold mb-2">
                May 2024 - Aug 2024
              </h5>
              <p className="italic">
                LOOM Property Insights, Pretoria, Gauteng
              </p>{' '}
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>
                  Built a project with live data, handling both frontend and
                  backend for property analytics systems.
                </li>
                <li>
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
