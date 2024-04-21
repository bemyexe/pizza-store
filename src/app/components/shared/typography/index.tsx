import { FC } from "react";
import styled from "styled-components";

interface TextProps {
  className?: string;
  children: string | number;
}

interface TypographyProps extends TextProps {
  weight: Weight;
  size: Size;
}

enum Weight {
  semibold = "600",
  regular = "400",
  light = "300",
}

enum Size {
  xl = "24px",
  l = "18px",
  m = "16px",
  s = "14px",
  xs = "12px",
}

const Text = styled.span<TypographyProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

export const TypographyComponent: FC<TypographyProps> = ({
  weight,
  size,
  children,
  className,
}) => {
  return (
    <Text weight={weight} size={size} className={className}>
      {children}
    </Text>
  );
};

export const TextXLSemibold: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.semibold}
    size={Size.xl}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextLSemibold: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.semibold}
    size={Size.l}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextMSemibold: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.semibold}
    size={Size.m}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextSSemibold: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.semibold}
    size={Size.s}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextXSSemibold: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.semibold}
    size={Size.xs}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextXLRegular: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.regular}
    size={Size.xl}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextLRegular: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.regular}
    size={Size.l}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextMRegular: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.regular}
    size={Size.m}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextSRegular: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.regular}
    size={Size.s}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextXSRegular: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.regular}
    size={Size.xs}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextXLLight: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.light}
    size={Size.xl}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextLLight: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.light}
    size={Size.l}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextMLight: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.light}
    size={Size.m}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextSLight: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.light}
    size={Size.s}
    className={className}
  >
    {children}
  </TypographyComponent>
);

export const TextXSLight: FC<TextProps> = ({ children, className }) => (
  <TypographyComponent
    weight={Weight.light}
    size={Size.xs}
    className={className}
  >
    {children}
  </TypographyComponent>
);
