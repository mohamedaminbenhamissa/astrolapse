import { FormProvider, useForm } from "react-hook-form";

type FormProps = {
  emailadress: string;
};
interface newProjectProps {
  visible: boolean;
  onClose: () => void;
}

const NewMember: React.FC<newProjectProps> = ({ visible, onClose }) => {
  const methods = useForm<FormProps>({
    defaultValues: {
      emailadress: "",
    },
  });
  const { handleSubmit } = methods;
  const onSubmit = (data: FormProps) => {
    console.log(data);
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black   bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <div className="flex justify-between items-center mb-5 ">
          <h1 className="font-roboto text-xl  text-black mt-2 mb-4">
            Add members
          </h1>
          <button
            className={` bg-white text-[#A58A76] text-3XL `}
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <FormProvider {...methods}>
          <form
            className="flex flex-coljustify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex w-full ">
              <input
                type="text"
                className="text-black rounded-lg min-w-80 px-2 py-3 w-full focus:outline-none border-2"
                placeholder="Enter email adress"
              />
            </div>
          </form>
        </FormProvider>
        <div className="flex mt-4 flex-row justify-end md:flex-column">
          <button
            className={`bg-white text-[#A58A76] font-poppins text-lg py-1 px-8 rounded-xl`}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`bg-[#A58A76] text-white font-poppins text-lg py-1 px-8 rounded-xl`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMember;
