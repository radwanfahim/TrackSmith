interface DashHeaderProps {
  dashHeaderData: {
    title: string;
    description: string;
    buttonText: string;
  };
}

import { BsPlus } from "solid-icons/bs";
import Button from "./Button";

const DashHeader = ({ dashHeaderData }: DashHeaderProps) => {
  const plusBtn = BsPlus;
  return (
    <div class="flex justify-between items-center">
      {/* text */}
      <div>
        <h1 class="text-3xl font-bold text-gray-700">{dashHeaderData.title}</h1>
        <p class="capitalize text-gray-700 mt-2">
          {dashHeaderData.description}
        </p>
      </div>

      {/* button */}
      <div>
        <Button
          icon={plusBtn}
          text={dashHeaderData.buttonText}
          style="button-default px-5"
        />
      </div>
    </div>
  );
};

export default DashHeader;
