export type MusicRecordFormat = 'CD' | 'LP' | 'DD';

export interface MusicRecord {
    albumId: number;
    title: string;
    artist: string;
    formats: MusicRecordFormat[];

    imagePath?: string;
}