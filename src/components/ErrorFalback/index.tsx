import { FallbackProps } from "react-error-boundary";
import * as S from "./styles";

export const ErrorFallback: React.FC<FallbackProps> = ({
  resetErrorBoundary,
}) => {
  return (
    <S.Container role="alert">
      <p>Desculpe, tivemos um problema 😕</p>

      <button onClick={resetErrorBoundary}>Tentar novamente</button>
    </S.Container>
  );
};
