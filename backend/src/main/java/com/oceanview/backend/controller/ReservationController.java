package com.oceanview.backend.controller;

import com.oceanview.backend.model.Reservation;
import com.oceanview.backend.model.ReservationStatus;
import com.oceanview.backend.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable String id) {
        return ResponseEntity.ok(reservationService.getReservationById(id));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Reservation> updateReservationStatus(
            @PathVariable String id,
            @RequestParam ReservationStatus status) {
        try {
            return ResponseEntity.ok(reservationService.updateReservationStatus(id, status));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReservation(@PathVariable String id) {
        try {
            reservationService.deleteReservation(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
