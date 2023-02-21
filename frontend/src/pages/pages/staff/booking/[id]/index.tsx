import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { startOfWeek, endOfWeek, getDay, startOfDay, endOfDay, add, format, addHours, getHours, getTime } from 'date-fns'
import momentTZ from 'moment-timezone';
import StudentLayout from "src/layouts/Student";
import { useCreateCounselorSessionMutation } from "schema/generated/graphql";
import { withApollo } from "utils/hooks/withApollo";
import { stat } from "fs";

const Counselor = () => {

  const router = useRouter()
  const { id, scheduleId } = router.query
  const [country, setCountry] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
  const [startDay, setStartDay] = useState(startOfWeek(Date.now(), { weekStartsOn: 1 }))
  const [endDay, setEndDay] = useState(endOfWeek(Date.now(), { weekStartsOn: 1 }))
  const [createCounselorSession] = useCreateCounselorSessionMutation();
  const [counsellingDate, setCounsellingDate] = useState('');
  const [counsellingReason, setCounsellingReason] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [address, setAddress] = useState('');
  const [race, setRace] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipcode] = useState('');

  const onSubmit = async (error) => {
    error.preventDefault()
    try {
      await createCounselorSession({
        variables: {
          data: {
            counsellingDate: counsellingDate,
            counsellingReason: counsellingReason,
            counselor: {
              connect: {
                id: id as any
              }
            },
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            maritalStatus: maritalStatus,
            address: address,
            race: race,
            city: city,
            state: state,
            zipCode: zipCode,
            counselorSchedule: {
              connect: {
                id: scheduleId as any
              }
            }
          }
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }



  return (
    <>
      <StudentLayout>
        <div className="mt-10 pt-28 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name={firstName}
                          id="first-name"
                          onChange={(e) => { setFirstName(e.target.value) }}
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name={lastName}
                          onChange={(e) => { setLastName(e.target.value) }}
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="text"
                          name={email}
                          onChange={(e) => { setEmail(e.target.value) }}
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="Gender" className="block text-sm font-medium text-gray-700">
                          Gender
                        </label>
                        <input
                          type="text"
                          name={gender}
                          onChange={(e) => { setGender(e.target.value) }}
                          id="Gender"
                          autoComplete="gender"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
                          Marital Status
                        </label>
                        <input
                          type="text"
                          name={maritalStatus}
                          onChange={(e) => { setMaritalStatus(e.target.value) }}
                          id="maritalStatus"
                          autoComplete="maritalStatus"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="counsellingReason" className="block text-sm font-medium text-gray-700">
                          Counselling Reason
                        </label>
                        <input
                          type="text"
                          name={counsellingReason}
                          onChange={(e) => { setCounsellingReason(e.target.value) }}
                          id="counsellingReason"
                          autoComplete="counsellingReason"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Street address
                        </label>
                        <input
                          type="text"
                          name={address}
                          onChange={(e) => { setAddress(e.target.value) }}
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="Race" className="block text-sm font-medium text-gray-700">
                          Race
                        </label>
                        <input
                          type="text"
                          name={race}
                          onChange={(e) => { setRace(e.target.value) }}
                          id="Race"
                          autoComplete="Race"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name={city}
                          onChange={(e) => { setCity(e.target.value) }}
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          State / Province
                        </label>
                        <input
                          type="text"
                          name={state}
                          onChange={(e) => { setState(e.target.value) }}
                          id="region"
                          autoComplete="address-level1"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name={zipCode}
                          onChange={(e) => { setZipcode(e.target.value) }}
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      onClick={(e) => onSubmit(e)}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </StudentLayout>
    </>
  );
}

export default withApollo(Counselor);