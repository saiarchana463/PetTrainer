package com.example.ControllerLayer;

import java.util.List;

import com.example.ModelLayer.ReportModel;
import com.example.Repository.ReportRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportController {
    @Autowired
    private ReportRepository reportRepository;
    
    @GetMapping("/checkup/Report/")
    public List<ReportModel> getReportDetails(@RequestBody ReportModel user) {
		return reportRepository.findAll();
	}

    public ReportRepository getReportRepository() {
        return reportRepository;
    }

    public void setReportRepository(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    @PostMapping("/add/Report")
    public String addReport(@RequestBody ReportModel user) {
		reportRepository.save(user);
		return "Detail is added";
	}

    @PutMapping("/update/Report")
    public ReportModel updateReport (@RequestBody ReportModel data) {
        return reportRepository.updateReport(data);
    }



}
