package com.rum.records.store.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import co.elastic.apm.attach.ElasticApmAttacher;

@SpringBootApplication
public class RumRecordsServerApplication {

	public static void main(String[] args) {
		ElasticApmAttacher.attach();
		SpringApplication.run(RumRecordsServerApplication.class, args);
	}

}
