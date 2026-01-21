import React, { ReactNode, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import { WAVES_BG_COLOR } from "../../constants/colors";
import { getRandomValue } from "../../constants/utils";

const getRandomBorderRadius = () => {
  return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
};

const Blob = styled(Box)<{ borderRadius: string }>(({ borderRadius }) => ({
  backgroundColor: WAVES_BG_COLOR,
  borderRadius,
  boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "border-radius 5s ease-in-out",
  overflow: "hidden",
}));

interface WaveBlobProps {
  props?: BoxProps;
  children?: ReactNode;
}

const WaveBlob = ({ props, children }: WaveBlobProps) => {
  const [borderRadius, setBorderRadius] = useState(getRandomBorderRadius());

  useEffect(() => {
    const interval = setInterval(() => {
      setBorderRadius(getRandomBorderRadius());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Blob {...props} borderRadius={borderRadius}>
      {children}
    </Blob>
  );
};

export default WaveBlob;
