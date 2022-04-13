// Internal Dependencies
import { Chart } from "../../db";
export class ChartHelpers {
  public static findAll = async () => {
      const data = await Chart.find();
      return data
  }
}