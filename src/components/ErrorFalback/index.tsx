import { FallbackProps } from "react-error-boundary";
import * as S from "./styles";

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  console.log("🚀 ~ file: index.tsx:8 ~ error:", error);
  return (
    <S.Container role="alert">
      <p>Desculpe, tivemos um problema 😕</p>

      <button onClick={resetErrorBoundary}>Tentar novamente</button>
    </S.Container>
  );
};
