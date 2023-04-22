import { FC } from "react";
import { SpinnerRoundOutlined } from "spinners-react";

const Loader: FC = () => {
  return (
    <SpinnerRoundOutlined
      size={67}
      thickness={100}
      speed={100}
      color="rgba(172, 110, 57, 1)"
    />
  );
};

export default Loader;
