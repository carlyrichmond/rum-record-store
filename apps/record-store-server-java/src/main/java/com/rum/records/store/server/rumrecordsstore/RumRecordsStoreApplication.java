package com.rum.records.store.server.rumrecordsstore;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.OpenTelemetry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

@SpringBootApplication
public class RumRecordsStoreApplication {

	private static Logger logger = LogManager.getLogger(RumRecordsStoreApplication.class);
	public static void main(String[] args) {
    SpringApplication.run(RumRecordsStoreApplication.class, args);
	logger.info("Rum Records Application started");

	}

  @Bean
  public OpenTelemetry openTelemetry() {
    return GlobalOpenTelemetry.get();
  }

}
