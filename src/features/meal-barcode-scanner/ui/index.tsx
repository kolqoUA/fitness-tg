import './styles.css';

import { useState } from 'react';

import { BarcodeScanner } from '@/shared/ui';

const MealBarcodeScanner = () => {
const [scannedCode, setScannedCode] = useState<string | null>(null);

  const handleSuccess = (code: string) => {
    console.log("Штрих-код знайдено:", code);
    setScannedCode(code);
  };

  return (
    <div className="meal-scanner-feature">
      <h2 className="title">Відскануйте продукт</h2>
      
      {!scannedCode ? (
        <BarcodeScanner onScanSuccess={handleSuccess} />
      ) : (
        <div className="result-box">
          <p>Код: {scannedCode}</p>
          <button onClick={() => setScannedCode(null)}>Сканувати інший</button>
        </div>
      )}
    </div>
  );
}

export default MealBarcodeScanner