import { BiMap, BiEnvelope, BiPhone } from 'react-icons/bi';
import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="contact py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title text-center">
          <SectionTitle>Contact</SectionTitle>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-full lg:w-1/2">
            <div className="info bg-white p-8 shadow-lg rounded-lg">
              <div className="flex items-start mb-6">
                <BiMap className="text-3xl text-custom-blue bg-blue-100 p-2 rounded-full" />
                <div className="ml-4">
                  <h4 className="text-xl font-bold">Location:</h4>
                  <p>Durbanville, Cape Town</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <BiEnvelope className="text-3xl text-custom-blue bg-blue-100 p-2 rounded-full" />
                <div className="ml-4">
                  <h4 className="text-xl font-bold">Email:</h4>
                  <p>Waldeck.mk@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <BiPhone className="text-3xl text-custom-blue bg-blue-100 p-2 rounded-full" />
                <div className="ml-4">
                  <h4 className="text-xl font-bold">Call:</h4>
                  <p>0789213169</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
