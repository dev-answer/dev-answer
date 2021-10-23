/**
 *
 * @param dateTime 예) 2021-09-21T15:01:35.502Z
 * @returns 예) 21/09/21
 */
export const getSlashDateFromDateTime = (dateTime: string | null): string | undefined => dateTime?.split('T')[0].split('-').join('/').slice(-8);

// TODO: util이 추가되면 제거
export const XXX = () => {};
