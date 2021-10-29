package com.itesoft.cx.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

public class AbstractDAO<T> {

    @PersistenceContext
    protected EntityManager entityManager;

    private final Class<T> clazz;

    protected AbstractDAO(Class<T> clazz) {
        this.clazz = clazz;
    }

    public T getById(String id) {
        return this.entityManager.find(this.clazz, id);
    }

    public List<T> getAll() {
        return this.entityManager
                .createQuery("select a from " + this.clazz.getSimpleName() + " a", this.clazz)
                .getResultList();
    }

    @Transactional
    public T update(T entity) {
        return this.entityManager.merge(entity);
    }

    public void remove(T entity) {
        this.entityManager.remove(entity);
    }

}
