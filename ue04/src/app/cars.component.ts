import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    this.updateBars().then((result: number[]) => {
      console.log('Daten eingetroffen');
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = result;
    this.barChartData = clone;
    }).catch((err) => {
      console.log('ERROR: Fehler!', err);
    });
  }

  public async randomize2(): Promise<string> {
    try {
    const result = await this.updateBars();
    console.log('Async await Promise :)');
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = result;
    this.barChartData = clone;
    return 'Super';
    } catch (err) {
      console.log('Error: Fehler!', err);
      throw (err);
    }
  }

  private updateBars(): Promise<number[]> {

    // Static Methods
    // if (true) {
    //   Promise.reject(new Error('Fehler'));
    // }

    return new Promise<number[]>((resolve, reject) => {
      setTimeout(() => {
        const data = [
          Math.round(Math.random() * 100),
          59,
          80,
          (Math.random() * 100),
          56,
          (Math.random() * 100),
          40];
        resolve(data);
      }, 1000);
    });
    // // Only Change 3 values
    // const data = [
    //   Math.round(Math.random() * 100),
    //   59,
    //   80,
    //   (Math.random() * 100),
    //   56,
    //   (Math.random() * 100),
    //   40];
    // const clone = JSON.parse(JSON.stringify(this.barChartData));
    // clone[0].data = data;
    // this.barChartData = clone;
  }

}
