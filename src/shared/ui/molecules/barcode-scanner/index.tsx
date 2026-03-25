import './styles.css';

import { useZxing } from "react-zxing";

interface BarcodeScannerProps {
  onScanSuccess: (decodedText: string) => void;
}

export const BarcodeScanner = ({ onScanSuccess }: BarcodeScannerProps) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      onScanSuccess(result.getText());
    },
  });

  return (
    <div className="scanner-container">
      <video ref={ref} className="scanner-video" />
    </div>
  );
};