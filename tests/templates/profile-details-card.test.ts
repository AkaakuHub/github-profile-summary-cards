import {aggregateCompletedMonthlyContributions} from '../../src/templates/profile-details-card';

describe('aggregateCompletedMonthlyContributions', () => {
    it('aggregates completed months and excludes the current month', () => {
        const contributions = [
            {date: new Date('2024-05-31T00:00:00.000Z'), contributionCount: 8},
            {date: new Date('2024-04-10T00:00:00.000Z'), contributionCount: 3},
            {date: new Date('2024-04-20T00:00:00.000Z'), contributionCount: 7},
            {date: new Date('2024-06-01T00:00:00.000Z'), contributionCount: 99}
        ];

        expect(aggregateCompletedMonthlyContributions(contributions, new Date('2024-06-15T12:00:00.000Z'))).toEqual([
            {date: new Date('2024-04-01T00:00:00.000Z'), contributionCount: 10},
            {date: new Date('2024-05-01T00:00:00.000Z'), contributionCount: 8}
        ]);
    });

    it('does not mutate the source contribution dates', () => {
        const contributions = [{date: new Date('2024-04-10T00:00:00.000Z'), contributionCount: 3}];
        const originalDate = contributions[0].date;

        aggregateCompletedMonthlyContributions(contributions, new Date('2024-06-15T12:00:00.000Z'));

        expect(contributions[0].date).toBe(originalDate);
    });
});
