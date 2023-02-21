import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import StudentLayout from "src/layouts/Student";
import { useCreateCounselorSessionMutation } from "schema/generated/graphql";
import { withApollo } from "utils/hooks/withApollo";
import "react-datepicker/dist/react-datepicker.css";
import { Feedback } from "src/components/FeedBack";
import { toast } from "react-toastify";
import { useResultCallback } from "utils/hooks/useResultCallback";

const Counselor = () => {

  const router = useRouter();
  const { id, scheduleId } = router.query
  const [createCounselorSession, sessionCreated] = useCreateCounselorSessionMutation();
  const [counsellingDate, setCounsellingDate] = useState(new Date());
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
  const [user, setUser] = useState({} as any);
  const [timeFrom, setTimeFrom] = useState(new Date());
  const [timeTo, setTimeTo] = useState(new Date());

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  

  const onSubmit = async (error) => {
    try {
      await createCounselorSession({
        variables: {

          data: {
            timeFrom: timeFrom as any,
            timeTo: timeTo as any,
            counsellingDate: counsellingDate as any,
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
            user: {
              connect: {
                id: user.id
              }
            },
            counselorSchedule: {
              connect: {
                id: scheduleId as any
              }
            }
          }
        },
        onCompleted(){
          toast({
            title: `Counselling Session has been created`,
            status: 'success',
          });
          router.push('/pages/user/myBookings/');
        }
      })
    } catch (error) {
      console.log(error.message)
      if (error) {
        toast(
          <Feedback
            title="There's an error!"
            subtitle= {error.graphQLErrors[0]?.extensions?.exception?.meta?.cause ?? error.graphQLErrors[0]?.message ?? error.message}
            type="error"
            disableFeedback={true}
          />,
          {
            progress: undefined,
            toastId: 1,
            autoClose: 3000,
          },
        );
      }
    }
  }

  const epoch = (date) => {
    return Date.parse(date)
  }
  const handleDateChange = (date) => {
    console.log('date is here!', epoch(date));
    setCounsellingDate(epoch(date) as any);
  }
  const handleTimeFromChange = (timeFrom) => {
    console.log('timeFrom is here!', epoch(timeFrom));
    setTimeFrom(epoch(timeFrom) as any);
  }
  const handleTimeToChange = (timeTo) => {
    console.log('timeto is here!', epoch(timeTo));
    setTimeTo(epoch(timeTo) as any);
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
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                        <select id="gender" name={gender} onChange={(e) => { setGender(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          <option selected>Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Apache Helicopter">Apache Helicopter</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Marital Status</label>
                        <select id="maritalStatus" name={maritalStatus} onChange={(e) => { setMaritalStatus(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          <option selected>Marital Status</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                          <option value="Widowed">Widowed</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="counsellingReason" className="block text-sm font-medium text-gray-700">Counselling Reason</label>
                        <select id="counsellingReason" name={counsellingReason} onChange={(e) => { setCounsellingReason(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          <option selected>Reason</option>
                          <option value="Anxiety & Depression">Anxiety & Depression</option>
                          <option value="Financial Crisis">Financial Crisis</option>
                          <option value="Stress Management">Stress Management</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="counsellingDate" className="block text-sm font-medium text-gray-700">Counselling Date</label>
                        <DatePicker
                          dateFormat="dd/MM/yyyy"
                          selected={counsellingDate}
                          onChange={handleDateChange}
                          value={counsellingDate as any}
                          placeholderText="Counselling Date"
                          className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="timeFrom" className="block text-sm font-medium text-gray-700">Time From</label>
                        <DatePicker
                          selected={timeFrom as any}
                          onChange={handleTimeFromChange}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="counsellingDate" className="block text-sm font-medium text-gray-700">Time To</label>
                        <DatePicker
                          selected={timeTo as any}
                          onChange={handleTimeToChange}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5"
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
                        <label htmlFor="race" className="block text-sm font-medium text-gray-700">Race</label>
                        <select id="race" name={race} onChange={(e) => { setRace(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                          <option selected>Race</option>
                          <option value="Malay">Malay</option>
                          <option value="Indian Malaysian">Indian Malaysian</option>
                          <option value="Chinese Malaysian">Chinese Malaysian</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
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
