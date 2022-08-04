package com.rum.records.store.server.record;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import reactor.core.publisher.Flux;

@Repository
public class RecordRepository {
    
    private static final List<MusicRecord> RECORD_DATA;

    static {
        RECORD_DATA = new ArrayList<MusicRecord>();
        RECORD_DATA.add(new MusicRecord("Abbey Road", "The Beetles"));
        RECORD_DATA.add(new MusicRecord("Sgt Pepper\'s Lonely Hearts Club Band", "The Beetles"));
        RECORD_DATA.add(new MusicRecord("True Blue", "Madonna"));
        RECORD_DATA.add(new MusicRecord("Born in the USA", "Bruce Springsteen"));
        RECORD_DATA.add(new MusicRecord("Grace Jones", "Island Life"));
        RECORD_DATA.add(new MusicRecord("The Dark Side of the Moon", "Pink Floyd"));
        RECORD_DATA.add(new MusicRecord("Unknown Pleasures", "Joy Division"));
        RECORD_DATA.add(new MusicRecord("Rumours", "Fleetwood Mac"));
        RECORD_DATA.add(new MusicRecord("Nevermind", "The Notorious BIG"));
        RECORD_DATA.add(new MusicRecord("Aladdin Sane", "David Bowie"));
        RECORD_DATA.add(new MusicRecord("The Dreaming", "Kate Bush"));
        RECORD_DATA.add(new MusicRecord("Definitely Maybe", "Oasis"));
        RECORD_DATA.add(new MusicRecord("Sticky Fingers", "The Rolling Stones"));
        RECORD_DATA.add(new MusicRecord("Parallel Lines", "Blondie"));
        RECORD_DATA.add(new MusicRecord("The Freewheelin\' Bob Dylan", "Bob Dylan"));
        RECORD_DATA.add(new MusicRecord("Led Zeppelin", "Led Zeppelin"));
        RECORD_DATA.add(new MusicRecord("London Calling", "The Clash"));
        RECORD_DATA.add(new MusicRecord("Straight Outta Compton", "NWA"));
        RECORD_DATA.add(new MusicRecord("The Ramones", "The Ramones"));
    }

    public Flux<MusicRecord> findRecordsByQuery(String query) {
        return Flux.fromStream(
            RECORD_DATA.stream().
            filter(x -> x.getArtist().toLowerCase().contains(query) 
            || x.getTitle().toLowerCase().contains(query)));
    }

    public Flux<MusicRecord> findAllRecords() {
        return Flux.fromIterable(RECORD_DATA);
    }

}
