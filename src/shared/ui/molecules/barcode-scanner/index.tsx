import Button from "../../atoms/button";
import "./styles.css";

import { useZxing } from "react-zxing";

interface Props {
  onScanSuccess: (decodedText: string) => void;
  onBackClick: () => void;
}

export const BarcodeScanner = (props: Props) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      props.onScanSuccess(result.getText());
    },
  });

  return (
    <div className="barcode-scanner">
      <video ref={ref} className="barcode-scanner__video" />
      <div className="barcode-scanner__actions">
        <Button className="button-surface-border" onClick={props.onBackClick}>
          Повернутися назад
        </Button>
      </div>
      <div className="barcode-scanner__overlay">
        <div className="barcode-scanner__target-box"></div>
        <p className="barcode-scanner__hint">Наведіть камеру на штрих-код</p>
      </div>
    </div>
  );
};
