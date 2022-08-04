package com.rum.records.store.server.record;

public class MusicRecord {

    private String title;

    private String artist; 

    MusicRecord(String title, String artist) {
        this.title = title;
        this.artist = artist;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return this.artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }
}