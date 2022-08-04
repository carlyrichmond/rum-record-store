package com.rum.records.store.server.record;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.reactive.server.WebTestClient;

import com.rum.records.store.server.RumRecordsServerApplication;

import static org.mockito.BDDMockito.given;

import reactor.core.publisher.Flux;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT, classes = RumRecordsServerApplication.class)
public class RecordControllerIntegrationTest {
    
    @Autowired
    private WebTestClient testClient;

    @MockBean
    private RecordRepository recordRepository;

    @Test
    void givenQuery_whenGetRecordsByQuery_thenCorrectRecord() {

        ArrayList<MusicRecord> records = new ArrayList<MusicRecord>();
        records.add(new MusicRecord("Hozier", "Hozier"));
        records.add(new MusicRecord("Wasteland, Baby!", "Hozier"));;

        given(recordRepository.findRecordsByQuery("hozier")).willReturn(Flux.fromIterable(records));

        testClient.get()
          .uri("/records/hozier")
          .exchange()
          .expectStatus().isOk()
          .expectBodyList(MusicRecord.class).hasSize(2);
    }

    @Test
    void whenGetAllRecords_thenCorrecRecords() {
        
        ArrayList<MusicRecord> records = new ArrayList<MusicRecord>();
        records.add(new MusicRecord("Hozier", "Hozier"));
        records.add(new MusicRecord("Wasteland, Baby!", "Hozier"));
        records.add(new MusicRecord("Dream your Life Away", "Vance Job"));

        given(recordRepository.findAllRecords()).willReturn(Flux.fromIterable(records));

        testClient.get()
          .uri("/records")
          .exchange()
          .expectStatus().isOk()
          .expectBodyList(MusicRecord.class).hasSize(3);
    }

}
