package com.app;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UrbanKartApplication {

	public static void main(String[] args) {
		SpringApplication.run(UrbanKartApplication.class, args);
	}
	
	//Bean creation of model mapper
	@Bean
	public ModelMapper mapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);//This line configures the ModelMapper to use a strict matching strategy for mapping properties between objects. The MatchingStrategies.STRICT strategy enforces that source and destination properties have the same name and type for mapping to occur.
		return modelMapper;
	}

}
