import "./styles.css";

import { useState } from "react";

import { BarcodeScanner, Button } from "@/shared/ui";
import { BarcodeScannerCard } from "./barcode-scanner-card";
import { fetchProductByBarcode } from "../api/fetch-product-by-barcode";
import { Meal, type MealType } from "@/entities/meal";

const MealBarcodeScanner = () => {
  const [isBarcodeScanner, setIsBarcodeScanner] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [scannedProduct, setScannedProduct] = useState<MealType | null>(null);

  const handleSuccess = async (code: string) => {
    setIsBarcodeScanner(false);

    setIsLoading(true);

    const product = await fetchProductByBarcode(code);

    setIsLoading(false);

    if (product) {
      setScannedProduct(product);
    } else {
      alert(`Продукт зі штрих-кодом ${code} не знайдено в базі :(`);
    }
  };

  if (isBarcodeScanner) {
    return (
      <div className="meal-scanner-feature">
        <BarcodeScanner
          onScanSuccess={handleSuccess}
          onBackClick={() => {
            (setIsBarcodeScanner(false), setScannedProduct(null));
          }}
        />
      </div>
    );
  }

  return (
    <div className="meal-scanner-feature">
      <BarcodeScannerCard onClick={() => setIsBarcodeScanner(true)} />
      {isLoading && <p>Шукаємо продукт у базі даних...</p>}
      {scannedProduct && !isLoading && (
        <>
          <div>
            <Meal meal={scannedProduct} />
          </div>
          <Button className="button-primary">Добавити</Button>
        </>
      )}
    </div>
  );
};

export default MealBarcodeScanner;
