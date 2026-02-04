import Image from "next/image";
import SpinnerStyles from "./spinner.styles";
import { DEFAULT_BEE_LOGO } from "@/utils/constants/defaultStaticImages";

type SpinnerProps = {
  show?: boolean;
};

export default function SpinnerComponent({ show = true }: SpinnerProps) {
  if (!show) return null;

  return (
    <>
      <div className="spinner-overlay">
        <div className="spinner-orbit">
          <div className="spinner-bee">
            <Image
              src={DEFAULT_BEE_LOGO.image}
              alt={DEFAULT_BEE_LOGO.alt}
              width={48}
              height={48}
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{SpinnerStyles}</style>
    </>
  );
}
