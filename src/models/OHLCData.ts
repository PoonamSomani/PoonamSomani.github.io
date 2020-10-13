export class OHLCData {
  public date: Date;
  public open: number;
  public high: number;
  public low: number;
  public close: number;
  public volume: number;

  public constructor(obj?: string) {
    let data = obj && obj.split(",");
    this.date = (data && new Date(+data[0])) || new Date();
    this.open = (data && +data[1]) || 0;
    this.high = (data && +data[2]) || 0;
    this.low = (data && +data[3]) || 0;
    this.close = (data && +data[4]) || 0;
    this.volume = (data && +data[5]) || 0;
  }
}
