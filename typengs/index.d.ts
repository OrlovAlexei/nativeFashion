interface SvgComponent extends React.FC<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const value: SvgComponent;
  export default value;
}
