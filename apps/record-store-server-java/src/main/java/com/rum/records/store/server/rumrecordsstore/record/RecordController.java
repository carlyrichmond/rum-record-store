package com.rum.records.store.server.rumrecordsstore.record;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;

@RestController
@CrossOrigin(origins = {"http://localhost:4205", "http://localhost:3000"})
@RequestMapping("/records")
public class RecordController {

  private static Logger logger = LogManager.getLogger(RecordController.class);
  private final RecordRepository recordRepository;

  public RecordController(RecordRepository recordRepository) {
    this.recordRepository = recordRepository;
  }

  @GetMapping
  private Flux<MusicRecord> getAllRecords() throws InterruptedException {
    logger.info("Waiting...");
    Thread.sleep(10000);
    logger.info("Getting all records");
    return recordRepository.findAllRecords();
  }

  @GetMapping("/{query}")
  private Flux<MusicRecord> getRecordByQuery(@PathVariable String query) throws InterruptedException {
    logger.info("Waiting...");
    Thread.sleep(10000);
    logger.info(String.format("Getting records that match query: %s", query));
    return recordRepository.findRecordsByQuery(query);
  }
}
