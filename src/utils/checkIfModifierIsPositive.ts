const checkIfModifierIsPositive = (characteristicValue: string) => {
  if (Number.isNaN(characteristicValue))
    throw new Error(
      "Не могу проверить, является ли характеристика положительной"
    );

  return Math.floor((Number(characteristicValue) - 10) / 2) >= 12;
};

export default checkIfModifierIsPositive;
