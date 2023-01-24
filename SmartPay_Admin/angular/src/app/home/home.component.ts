import { Component, Injector, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Chart } from 'chart.js/auto';

@Component({
  templateUrl: './home.component.html',
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent extends AppComponentBase {
    @ViewChild('barCanvas') barCanvas: ElementRef | undefined;
    barChart: any;
  constructor(injector: Injector) {
    super(injector);
  }
    ngOnInit() {
        this.barChartMethod();
    }

    barChartMethod() {
        this.barChart = new Chart("barCanvas", {
            type:'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                    'November', 'December'],
                datasets: [
                    {
                        label: 'No of Transection Per Month',
                        data: [200, 50, 30, 15, 20, 34, 100, 150, 79, 84, 230],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            
        });
    }

}
