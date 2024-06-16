export type TopProps = {
  city: City;
  def: Def;
};

export type SearchBoxProps = {
  city: City;
  cityChange: React.Dispatch<React.SetStateAction<string>>;
  tempChange: React.Dispatch<React.SetStateAction<number>>;
  defChange: React.Dispatch<React.SetStateAction<string>>;
};

export type TempProps = {
  temp: Temp;
};

export type City = string;
export type Temp = number;
export type Def = string;
