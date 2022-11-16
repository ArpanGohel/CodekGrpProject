import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class SurveyRepository {
  private surveys: Survey[] = [];
  private completedSurveys: Survey[] = [];
  private availableSurveys: Survey[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getSurveys().subscribe((data) => {
      this.surveys = data;
      let today = new Date();
      today.setHours(0, 0, 0, 0);
      this.completedSurveys = data.filter((survey) => {
        return new Date(survey.dateEnd).getTime() < today.getTime();
      });
      this.availableSurveys = data.filter((survey) => {
        return new Date(survey.dateEnd).getTime() >= today.getTime();
      });
    });
  }

  getSurveys(user: string = null): Survey[] {
    return this.surveys.filter(
      (survey) => user == null || user === survey.user
    );
  }

  getSurvey(id: number): Survey {
    return this.surveys.find((survey) => survey._id === id);
  }

  getCompletedSurvey(): Survey[] {
    return this.completedSurveys;
  }

  getAvailableSurvey(): Survey[] {
    return this.availableSurveys;
  }
}
